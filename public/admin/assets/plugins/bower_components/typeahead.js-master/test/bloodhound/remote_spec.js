describe('Remote', () => {

  beforeEach(function() {
    jasmine.Transport.useMock();

    this.remote = new Remote({
      url: '/test?q=%QUERY',
      prepare(x) { return x; },
      transform(x) { return x; }
    });

    this.transport = this.remote.transport;
  });

  describe('#cancelLastRequest', () => {
    it('should cancel last request', function() {
      this.remote.cancelLastRequest();
      expect(this.transport.cancel).toHaveBeenCalled();
    });
  });

  describe('#get', () => {
    it('should have sensible default request settings', function() {
      let spy;

      spy = jasmine.createSpy();
      spyOn(this.remote, 'prepare');

      this.remote.get('foo', spy);

      expect(this.remote.prepare).toHaveBeenCalledWith('foo', {
        url: '/test?q=%QUERY',
        type: 'GET',
        dataType: 'json'
      });
    });

    it('should transform request settings with prepare', function() {
      let spy;

      spy = jasmine.createSpy();
      spyOn(this.remote, 'prepare').andReturn([{ foo: 'bar' }]);

      this.remote.get('foo', spy);

      expect(this.transport.get)
      .toHaveBeenCalledWith([{ foo: 'bar' }], jasmine.any(Function));
    });

    it('should transform response with transform', function() {
      let spy;

      spy = jasmine.createSpy();
      spyOn(this.remote, 'transform').andReturn([{ foo: 'bar' }]);
      this.transport.get.andCallFake((_, cb) => { cb(null, {}); });

      this.remote.get('foo', spy);

      expect(spy).toHaveBeenCalledWith([{ foo: 'bar' }]);
    });

    it('should return empty array on error', function() {
      let spy;

      spy = jasmine.createSpy();
      this.transport.get.andCallFake((_, cb) => { cb(true); });

      this.remote.get('foo', spy);

      expect(spy).toHaveBeenCalledWith([]);
    });
  });
});
