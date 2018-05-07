/*
 * typeahead.js
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */

const WWW = (function() {
  

  const defaultClassNames = {
    wrapper: 'twitter-typeahead',
    input: 'tt-input',
    hint: 'tt-hint',
    menu: 'tt-menu',
    dataset: 'tt-dataset',
    suggestion: 'tt-suggestion',
    selectable: 'tt-selectable',
    empty: 'tt-empty',
    open: 'tt-open',
    cursor: 'tt-cursor',
    highlight: 'tt-highlight'
  };

  return build;

  function build(o) {
    let www, classes;

    classes = _.mixin({}, defaultClassNames, o);

    www = {
      css: buildCss(),
      classes,
      html: buildHtml(classes),
      selectors: buildSelectors(classes)
    };

    return {
      css: www.css,
      html: www.html,
      classes: www.classes,
      selectors: www.selectors,
      mixin(o) { _.mixin(o, www); }
    };
  }

  function buildHtml(c) {
    return {
      wrapper: `<span class="${  c.wrapper  }"></span>`,
      menu: `<div class="${  c.menu  }"></div>`
    };
  }

  function buildSelectors(classes) {
    const selectors = {};
    _.each(classes, (v, k) => { selectors[k] = `.${  v}`; });

    return selectors;
  }

  function buildCss() {
    const css =  {
      wrapper: {
        position: 'relative',
        display: 'inline-block'
      },
      hint: {
        position: 'absolute',
        top: '0',
        left: '0',
        borderColor: 'transparent',
        boxShadow: 'none',
        // #741: fix hint opacity issue on iOS
        opacity: '1'
      },
      input: {
        position: 'relative',
        verticalAlign: 'top',
        backgroundColor: 'transparent'
      },
      inputWithNoHint: {
        position: 'relative',
        verticalAlign: 'top'
      },
      menu: {
        position: 'absolute',
        top: '100%',
        left: '0',
        zIndex: '100',
        display: 'none'
      },
      ltr: {
        left: '0',
        right: 'auto'
      },
      rtl: {
        left: 'auto',
        right:' 0'
      }
    };

    // ie specific styling
    if (_.isMsie()) {
       // ie6-8 (and 9?) doesn't fire hover and click events for elements with
       // transparent backgrounds, for a workaround, use 1x1 transparent gif
      _.mixin(css.input, {
        backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)'
      });
    }

    return css;
  }
})();
