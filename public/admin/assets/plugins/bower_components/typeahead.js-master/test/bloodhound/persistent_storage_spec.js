describe('PersistentStorage', () => {
  let engine, ls;

  // test suite is dependent on localStorage being available
  if (!window.localStorage) {
    console.warn('no localStorage support – skipping PersistentStorage suite');
    return;
  }

  // for good measure!
  localStorage.clear();

  beforeEach(() => {
    ls = {
      get length() { return localStorage.length; },
      key: spyThrough('key'),
      clear: spyThrough('clear'),
      getItem: spyThrough('getItem'),
      setItem: spyThrough('setItem'),
      removeItem: spyThrough('removeItem')
    };

    engine = new PersistentStorage('ns', ls);
    spyOn(Date.prototype, 'getTime').andReturn(0);
  });

  afterEach(() => {
    localStorage.clear();
  });

  // public methods
  // --------------

  describe('#get', () => {
    it('should access localStorage with prefixed key', () => {
      engine.get('key');
      expect(ls.getItem).toHaveBeenCalledWith('__ns__key');
    });

    it('should return undefined when key does not exist', () => {
      expect(engine.get('does not exist')).toEqual(undefined);
    });

    it('should return value as correct type', () => {
      engine.set('string', 'i am a string');
      engine.set('number', 42);
      engine.set('boolean', true);
      engine.set('null', null);
      engine.set('object', { obj: true });

      expect(engine.get('string')).toEqual('i am a string');
      expect(engine.get('number')).toEqual(42);
      expect(engine.get('boolean')).toEqual(true);
      expect(engine.get('null')).toBeNull();
      expect(engine.get('object')).toEqual({ obj: true });
    });

    it('should expire stale keys', () => {
      engine.set('key', 'value', -1);

      expect(engine.get('key')).toBeNull();
      expect(ls.getItem('__ns__key__ttl')).toBeNull();
    });
  });

  describe('#set', () => {
    it('should access localStorage with prefixed key', () => {
      engine.set('key', 'val');
      expect(ls.setItem.mostRecentCall.args[0]).toEqual('__ns__key');
    });

    it('should JSON.stringify value before storing', () => {
      engine.set('key', 'val');
      expect(ls.setItem.mostRecentCall.args[1]).toEqual(JSON.stringify('val'));
    });

    it('should store ttl if provided', () => {
      const ttl = 1;
      engine.set('key', 'value', ttl);

      expect(ls.setItem.argsForCall[0])
      .toEqual(['__ns__key__ttl__', ttl.toString()]);
    });

    it('should call clear if the localStorage limit has been reached', () => {
      let spy;

      ls.setItem.andCallFake(() => {
        const err = new Error();
        err.name = 'QuotaExceededError';

        throw err;
      });

      engine.clear = spy = jasmine.createSpy();
      engine.set('key', 'value', 1);

      expect(spy).toHaveBeenCalled();
    });

    it('should noop if the localStorage limit has been reached', () => {
      let get, set, remove, clear, isExpired;

      ls.setItem.andCallFake(() => {
        const err = new Error();
        err.name = 'QuotaExceededError';

        throw err;
      });

      get = engine.get;
      set = engine.set;
      remove = engine.remove;
      clear = engine.clear;
      isExpired = engine.isExpired;

      engine.set('key', 'value', 1);

      expect(engine.get).not.toBe(get);
      expect(engine.set).not.toBe(set);
      expect(engine.remove).not.toBe(remove);
      expect(engine.clear).not.toBe(clear);
      expect(engine.isExpired).not.toBe(isExpired);
    });
  });

  describe('#remove', () => {

    it('should remove key from storage', () => {
      engine.set('key', 'val');
      engine.remove('key');

      expect(engine.get('key')).toBeNull();
    });
  });

  describe('#clear', () => {
    it('should work with namespaces that contain regex characters', () => {
      engine = new PersistentStorage('ns?()');
      engine.set('key1', 'val1');
      engine.set('key2', 'val2');
      engine.clear();

      expect(engine.get('key1')).toEqual(undefined);
      expect(engine.get('key2')).toEqual(undefined);
    });

    it('should remove all keys that exist in namespace of engine', () => {
      engine.set('key1', 'val1');
      engine.set('key2', 'val2');
      engine.set('key3', 'val3');
      engine.set('key4', 'val4', 0);
      engine.clear();

      expect(engine.get('key1')).toEqual(undefined);
      expect(engine.get('key2')).toEqual(undefined);
      expect(engine.get('key3')).toEqual(undefined);
      expect(engine.get('key4')).toEqual(undefined);
    });

    it('should not affect keys with different namespace', () => {
      ls.setItem('diff_namespace', 'val');
      engine.clear();

      expect(ls.getItem('diff_namespace')).toEqual('val');
    });
  });

  describe('#isExpired', () => {
    it('should be false for keys without ttl', () => {
      engine.set('key', 'value');
      expect(engine.isExpired('key')).toBe(false);
    });

    it('should be false for fresh keys', () => {
      engine.set('key', 'value', 1);
      expect(engine.isExpired('key')).toBe(false);
    });

    it('should be true for stale keys', () => {
      engine.set('key', 'value', -1);
      expect(engine.isExpired('key')).toBe(true);
    });
  });

  // compatible across browsers
  function spyThrough(method) {
    return jasmine.createSpy().andCallFake(fake);

    function fake() {
      return localStorage[method](...arguments);
    }
  }
});
