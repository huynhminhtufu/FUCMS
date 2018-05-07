(function(root) {
  let components;

  components = [
    'Bloodhound',
    'Prefetch',
    'Remote',
    'PersistentStorage',
    'Transport',
    'SearchIndex',
    'Input',
    'Dataset',
    'Menu'
    ];

  for (let i = 0; i < components.length; i++) {
    makeMockable(components[i]);
  }

  function makeMockable(component) {
    let Original, Mock;

    Original = root[component];
    Mock = mock(Original);

    jasmine[component] = { useMock, uninstallMock };

    function useMock() {
      root[component] = Mock;
      jasmine.getEnv().currentSpec.after(uninstallMock);
    }

    function uninstallMock() {
      root[component] = Original;
    }
  }

  function mock(Constructor) {
    let constructorSpy;

    Mock.prototype = Constructor.prototype;
    constructorSpy = jasmine.createSpy('mock constructor').andCallFake(Mock);

    // copy instance methods
    for (const key in Constructor) {
      if (typeof Constructor[key] === 'function') {
        constructorSpy[key] = Constructor[key];
      }
    }

    return constructorSpy;

    function Mock() {
      const instance = _.mixin({}, Constructor.prototype);

      for (const key in instance) {
        if (typeof instance[key] === 'function') {
          spyOn(instance, key);

          // special case for some components
          if (key === 'bind') {
            instance[key].andCallFake(function() { return this; });
          }
        }
      }

      // have the event emitter methods call through
      instance.onSync && instance.onSync.andCallThrough();
      instance.onAsync && instance.onAsync.andCallThrough();
      instance.off && instance.off.andCallThrough();
      instance.trigger && instance.trigger.andCallThrough();

      instance.constructor = Constructor;

      return instance;
    }
  }
})(this);
