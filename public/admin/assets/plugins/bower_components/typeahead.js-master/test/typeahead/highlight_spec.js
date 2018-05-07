describe('highlight', () => {
  it('should allow tagName to be specified', () => {
    let before = 'abcde',
        after = 'a<span>bcd</span>e',
        testNode = buildTestNode(before);

    highlight({ node: testNode, pattern: 'bcd', tagName: 'span' });
    expect(testNode.innerHTML).toEqual(after);
  });

  it('should allow className to be specified', () => {
    let before = 'abcde',
        after = 'a<strong class="one two">bcd</strong>e',
        testNode = buildTestNode(before);

    highlight({ node: testNode, pattern: 'bcd', className: 'one two' });
    expect(testNode.innerHTML).toEqual(after);
  });

  it('should be case insensitive by default', () => {
    let before = 'ABCDE',
        after = 'A<strong>BCD</strong>E',
        testNode = buildTestNode(before);

    highlight({ node: testNode, pattern: 'bcd' });
    expect(testNode.innerHTML).toEqual(after);
  });

  it('should support case sensitivity', () => {
    let before = 'ABCDE',
        after = 'ABCDE',
        testNode = buildTestNode(before);

    highlight({ node: testNode, pattern: 'bcd', caseSensitive: true });
    expect(testNode.innerHTML).toEqual(after);
  });

  it('should support words only matching', () => {
    let before = 'tone one phone',
        after = 'tone <strong>one</strong> phone',
        testNode = buildTestNode(before);

    highlight({ node: testNode, pattern: 'one', wordsOnly: true });
    expect(testNode.innerHTML).toEqual(after);
  });

  it('should support matching multiple patterns', () => {
    let before = 'tone one phone',
        after = '<strong>tone</strong> one <strong>phone</strong>',
        testNode = buildTestNode(before);

    highlight({ node: testNode, pattern: ['tone', 'phone'] });
    expect(testNode.innerHTML).toEqual(after);
  });

  it('should support regex chars in the pattern', () => {
    let before = '*.js when?',
        after = '<strong>*.</strong>js when<strong>?</strong>',
        testNode = buildTestNode(before);

    highlight({ node: testNode, pattern: ['*.', '?'] });
    expect(testNode.innerHTML).toEqual(after);
  });

  it('should work on complex html structures', () => {
    let before = [
          '<div>abcde',
            '<span>abcde</span>',
            '<div><p>abcde</p></div>',
          '</div>'
        ].join(''),
        after = [
          '<div><strong>abc</strong>de',
            '<span><strong>abc</strong>de</span>',
            '<div><p><strong>abc</strong>de</p></div>',
          '</div>'
        ].join(''),
        testNode = buildTestNode(before);

    highlight({ node: testNode, pattern: 'abc' });
    expect(testNode.innerHTML).toEqual(after);
  });

  it('should ignore html tags and attributes', () => {
    let before = '<span class="class"></span>',
        after = '<span class="class"></span>',
        testNode = buildTestNode(before);

    highlight({ node: testNode, pattern: ['span', 'class'] });
    expect(testNode.innerHTML).toEqual(after);
  });

  it('should not match across tags', () => {
    let before = 'a<span>b</span>c',
        after = 'a<span>b</span>c',
        testNode = buildTestNode(before);

    highlight({ node: testNode, pattern: 'abc' });
    expect(testNode.innerHTML).toEqual(after);
  });

  it('should ignore html comments', () => {
    let before = '<!-- abc -->',
        after = '<!-- abc -->',
        testNode = buildTestNode(before);

    highlight({ node: testNode, pattern: 'abc' });
    expect(testNode.innerHTML).toEqual(after);
  });

  function buildTestNode(content) {
    const node = document.createElement('div');
    node.innerHTML = content;

    return node;
  }
});
