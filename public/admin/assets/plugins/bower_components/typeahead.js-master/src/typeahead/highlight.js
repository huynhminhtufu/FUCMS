/*
 * typeahead.js
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */

// inspired by https://github.com/jharding/bearhug

const highlight = (function(doc) {
  

  const defaults = {
        node: null,
        pattern: null,
        tagName: 'strong',
        className: null,
        wordsOnly: false,
        caseSensitive: false
      };

  return function hightlight(o) {
    let regex;

    o = _.mixin({}, defaults, o);

    if (!o.node || !o.pattern) {
      // fail silently
      return;
    }

    // support wrapping multiple patterns
    o.pattern = _.isArray(o.pattern) ? o.pattern : [o.pattern];

    regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);
    traverse(o.node, hightlightTextNode);

    function hightlightTextNode(textNode) {
      let match, patternNode, wrapperNode;

      if (match = regex.exec(textNode.data)) {
        wrapperNode = doc.createElement(o.tagName);
        o.className && (wrapperNode.className = o.className);

        patternNode = textNode.splitText(match.index);
        patternNode.splitText(match[0].length);
        wrapperNode.appendChild(patternNode.cloneNode(true));

        textNode.parentNode.replaceChild(wrapperNode, patternNode);
      }

      return !!match;
    }

    function traverse(el, hightlightTextNode) {
      let childNode, TEXT_NODE_TYPE = 3;

      for (let i = 0; i < el.childNodes.length; i++) {
        childNode = el.childNodes[i];

        if (childNode.nodeType === TEXT_NODE_TYPE) {
          i += hightlightTextNode(childNode) ? 1 : 0;
        }

        else {
          traverse(childNode, hightlightTextNode);
        }
      }
    }
  };

  function getRegex(patterns, caseSensitive, wordsOnly) {
    let escapedPatterns = [], regexStr;

    for (let i = 0, len = patterns.length; i < len; i++) {
      escapedPatterns.push(_.escapeRegExChars(patterns[i]));
    }

    regexStr = wordsOnly ?
      `\\b(${  escapedPatterns.join('|')  })\\b` :
      `(${  escapedPatterns.join('|')  })`;

    return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, 'i');
  }
})(window.document);
