describe('Dataset', () => {
  let www = WWW(), mockSuggestions, mockSuggestionsDisplayFn;

  mockSuggestions = [
    { value: 'one', raw: { value: 'one' } },
    { value: 'two', raw: { value: 'two' } },
    { value: 'html', raw: { value: '<b>html</b>' } }
  ];

  mockSuggestionsDisplayFn = [
    { display: '4' },
    { display: '5' },
    { display: '6' }
  ];

  beforeEach(function() {
    this.dataset = new Dataset({
      name: 'test',
      node: $('<div>'),
      source: this.source = jasmine.createSpy('source')
    }, www);
  });

  it('should throw an error if source is missing', () => {
    expect(noSource).toThrow();

    function noSource() { new Dataset({}, www); }
  });

  it('should throw an error if the name is not a valid class name', () => {
    expect(fn).toThrow();

    function fn() {
      const d = new Dataset({
        name: 'a space',
        node: $('<div>'),
        source: $.noop
      }, www);
    }
  });

  describe('#getRoot', () => {
    it('should return the root element', function() {
      const sel = `div${  www.selectors.dataset  }${www.selectors.dataset  }-test`;
      expect(this.dataset.$el).toBe(sel);
    });
  });

  describe('#update', () => {
    it('should render suggestions', function() {
      this.source.andCallFake(syncMockSuggestions);
      this.dataset.update('woah');

      expect(this.dataset.$el).toContainText('one');
      expect(this.dataset.$el).toContainText('two');
      expect(this.dataset.$el).toContainText('html');
    });

    it('should escape html chars from display value when using default template', function() {
      this.source.andCallFake(syncMockSuggestions);
      this.dataset.update('woah');

      expect(this.dataset.$el).toContainText('<b>html</b>');
    });

    it('should respect limit option', function() {
      this.dataset.limit = 2;
      this.source.andCallFake(syncMockSuggestions);
      this.dataset.update('woah');

      expect(this.dataset.$el).toContainText('one');
      expect(this.dataset.$el).toContainText('two');
      expect(this.dataset.$el).not.toContainText('three');
    });

    it('should allow custom display functions', function() {
      this.dataset = new Dataset({
        name: 'test',
        node: $('<div>'),
        display(o) { return o.display; },
        source: this.source = jasmine.createSpy('source')
      }, www);

      this.source.andCallFake(syncMockSuggestionsDisplayFn);
      this.dataset.update('woah');

      expect(this.dataset.$el).toContainText('4');
      expect(this.dataset.$el).toContainText('5');
      expect(this.dataset.$el).toContainText('6');
    });

    it('should ignore async invocations of sync', function() {
      this.source.andCallFake(asyncSync);
      this.dataset.update('woah');

      expect(this.dataset.$el).not.toContainText('one');
    });

    it('should ignore subesequent invocations of sync', function() {
      this.source.andCallFake(multipleSync);
      this.dataset.update('woah');

      expect(this.dataset.$el.find('.tt-suggestion')).toHaveLength(3);
    });

    it('should trigger asyncRequested when needing/expecting backfill', function() {
      const spy = jasmine.createSpy();

      this.dataset.async = true;
      this.dataset.onSync('asyncRequested', spy);
      this.source.andCallFake(fakeGetWithAsyncSuggestions);

      this.dataset.update('woah');

      expect(spy).toHaveBeenCalled();
    });

    it('should not trigger asyncRequested when not expecting backfill', function() {
      const spy = jasmine.createSpy();

      this.dataset.async = false;
      this.dataset.onSync('asyncRequested', spy);
      this.source.andCallFake(fakeGetWithAsyncSuggestions);

      this.dataset.update('woah');

      expect(spy).not.toHaveBeenCalled();
    });

    it('should not trigger asyncRequested when not expecting backfill', function() {
      const spy = jasmine.createSpy();

      this.dataset.limit = 2;
      this.dataset.async = true;
      this.dataset.onSync('asyncRequested', spy);
      this.source.andCallFake(fakeGetWithAsyncSuggestions);

      this.dataset.update('woah');

      expect(spy).not.toHaveBeenCalled();
    });

    it('should trigger asyncCanceled when pending aysnc is canceled', function() {
      const spy = jasmine.createSpy();

      this.dataset.async = true;
      this.dataset.onSync('asyncCanceled', spy);
      this.source.andCallFake(fakeGetWithAsyncSuggestions);

      this.dataset.update('woah');
      this.dataset.cancel();

      waits(100);

      runs(() => {
        expect(spy).toHaveBeenCalled();
      });
    });

    it('should not trigger asyncCanceled when cancel happens after update', function() {
      const spy = jasmine.createSpy();

      this.dataset.async = true;
      this.dataset.onSync('asyncCanceled', spy);
      this.source.andCallFake(fakeGetWithAsyncSuggestions);

      this.dataset.update('woah');

      waits(100);

      runs(function() {
        this.dataset.cancel();
        expect(spy).not.toHaveBeenCalled();
      });
    });

    it('should trigger asyncReceived when aysnc is received', function() {
      const spy = jasmine.createSpy();

      this.dataset.async = true;
      this.dataset.onSync('asyncReceived', spy);
      this.source.andCallFake(fakeGetWithAsyncSuggestions);

      this.dataset.update('woah');

      waits(100);

      runs(() => {
        expect(spy).toHaveBeenCalled();
      });
    });

    it('should not trigger asyncReceived if canceled', function() {
      const spy = jasmine.createSpy();

      this.dataset.async = true;
      this.dataset.onSync('asyncReceived', spy);
      this.source.andCallFake(fakeGetWithAsyncSuggestions);

      this.dataset.update('woah');
      this.dataset.cancel();

      waits(100);

      runs(() => {
        expect(spy).not.toHaveBeenCalled();
      });
    });

    it('should not modify sync when async is added', function() {
      let $test;

      this.dataset.async = true;
      this.source.andCallFake(fakeGetWithAsyncSuggestions);

      this.dataset.update('woah');
      $test = this.dataset.$el.find('.tt-suggestion').first();
      $test.addClass('test');

      waits(100);

      runs(() => {
        expect($test).toHaveClass('test');
      });
    });

    it('should respect limit option in regard to async', function() {
      this.dataset.async = true;
      this.source.andCallFake(fakeGetWithAsyncSuggestions);

      this.dataset.update('woah');

      waits(100);

      runs(function() {
        expect(this.dataset.$el.find('.tt-suggestion')).toHaveLength(5);
      });
    });

    it('should cancel pending async', function() {
      let spy1 = jasmine.createSpy(), spy2 = jasmine.createSpy();

      this.dataset.async = true;
      this.dataset.onSync('asyncCanceled', spy1);
      this.dataset.onSync('asyncReceived', spy2);
      this.source.andCallFake(fakeGetWithAsyncSuggestions);


      this.dataset.update('woah');
      this.dataset.update('woah again');

      waits(100);

      runs(() => {
        expect(spy1.callCount).toBe(1);
        expect(spy2.callCount).toBe(1);
      });
    });

    it('should render notFound when no suggestions are available', function() {
      this.dataset = new Dataset({
        source: this.source,
        node: $('<div>'),
        templates: {
          notFound: '<h2>empty</h2>'
        }
      }, www);

      this.source.andCallFake(syncEmptySuggestions);
      this.dataset.update('woah');

      expect(this.dataset.$el).toContainText('empty');
    });

    it('should render pending when no suggestions are available but async is pending', function() {
      this.dataset = new Dataset({
        source: this.source,
        node: $('<div>'),
        async: true,
        templates: {
          pending: '<h2>pending</h2>'
        }
      }, www);

      this.source.andCallFake(syncEmptySuggestions);
      this.dataset.update('woah');

      expect(this.dataset.$el).toContainText('pending');
    });

    it('should render header when suggestions are rendered', function() {
      this.dataset = new Dataset({
        source: this.source,
        node: $('<div>'),
        templates: {
          header: '<h2>header</h2>'
        }
      }, www);

      this.source.andCallFake(syncMockSuggestions);
      this.dataset.update('woah');

      expect(this.dataset.$el).toContainText('header');
    });

    it('should render footer when suggestions are rendered', function() {
      this.dataset = new Dataset({
        source: this.source,
        node: $('<div>'),
        templates: {
          footer(c) { return `<p>${  c.query  }</p>`; }
        }
      }, www);

      this.source.andCallFake(syncMockSuggestions);
      this.dataset.update('woah');

      expect(this.dataset.$el).toContainText('woah');
    });

    it('should not render header/footer if there is no content', function() {
      this.dataset = new Dataset({
        source: this.source,
        node: $('<div>'),
        templates: {
          header: '<h2>header</h2>',
          footer: '<h2>footer</h2>'
        }
      }, www);

      this.source.andCallFake(syncEmptySuggestions);
      this.dataset.update('woah');

      expect(this.dataset.$el).not.toContainText('header');
      expect(this.dataset.$el).not.toContainText('footer');
    });

    it('should not render stale suggestions', function() {
      this.source.andCallFake(fakeGetWithAsyncSuggestions);
      this.dataset.update('woah');

      this.source.andCallFake(syncMockSuggestions);
      this.dataset.update('nelly');

      waits(100);

      runs(function() {
        expect(this.dataset.$el).toContainText('one');
        expect(this.dataset.$el).toContainText('two');
        expect(this.dataset.$el).toContainText('html');
        expect(this.dataset.$el).not.toContainText('four');
        expect(this.dataset.$el).not.toContainText('five');
      });
    });

    it('should not render async suggestions if update was canceled', function() {
      this.source.andCallFake(fakeGetWithAsyncSuggestions);
      this.dataset.update('woah');
      this.dataset.cancel();

      waits(100);

      runs(function() {
        const rendered = this.dataset.$el.find('.tt-suggestion');
        expect(rendered).toHaveLength(3);
      });
    });

    it('should trigger rendered after suggestions are rendered', function() {
      let spy;

      this.dataset.onSync('rendered', spy = jasmine.createSpy());

      this.source.andCallFake(syncMockSuggestions);
      this.dataset.update('woah');

      waitsFor(() => spy.callCount);
    });
  });

  describe('#clear', () => {
    it('should clear suggestions', function() {
      this.source.andCallFake(syncMockSuggestions);
      this.dataset.update('woah');

      this.dataset.clear();
      expect(this.dataset.$el).toBeEmpty();
    });

    it('should cancel pending updates', function() {
      let spy;

      this.source.andCallFake(syncMockSuggestions);
      this.dataset.update('woah');
      spy = spyOn(this.dataset, 'cancel');

      this.dataset.clear();
      expect(spy).toHaveBeenCalled();
    });

    it('should trigger cleared', function() {
      let spy;

      this.dataset.onSync('cleared', spy = jasmine.createSpy());
      this.dataset.clear();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('#isEmpty', () => {
    it('should return true when empty', function() {
      expect(this.dataset.isEmpty()).toBe(true);
    });

    it('should return false when not empty', function() {
      this.source.andCallFake(syncMockSuggestions);
      this.dataset.update('woah');

      expect(this.dataset.isEmpty()).toBe(false);
    });
  });

  describe('#destroy', () => {
    it('should set dataset element to dummy element', function() {
      const $prevEl = this.dataset.$el;

      this.dataset.destroy();
      expect(this.dataset.$el).not.toBe($prevEl);
    });
  });

  // helper functions
  // ----------------

  function syncEmptySuggestions(q, sync, async) {
    sync([]);
  }

  function syncMockSuggestions(q, sync, async) {
    sync(mockSuggestions);
  }

  function syncMockSuggestionsDisplayFn(q, sync, async) {
    sync(mockSuggestionsDisplayFn);
  }

  function asyncSync(q, sync, async) {
    setTimeout(() => { sync(mockSuggestions); }, 0);
  }

  function multipleSync(q, sync, async) {
    sync(mockSuggestions);
    sync(mockSuggestions);
  }

  function fakeGetWithAsyncSuggestions(query, sync, async) {
    sync(mockSuggestions);

    setTimeout(() => {
      async([
        { value: 'four', raw: { value: 'four' } },
        { value: 'five', raw: { value: 'five' } },
        { value: 'six', raw: { value: 'six' } },
        { value: 'seven', raw: { value: 'seven' } },
        { value: 'eight', raw: { value: 'eight' } },
      ]);
    }, 0);
  }
});
