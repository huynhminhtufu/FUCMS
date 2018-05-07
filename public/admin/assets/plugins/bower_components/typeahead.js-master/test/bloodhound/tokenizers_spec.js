describe('tokenizers', () => {

  it('.whitespace should tokenize on whitespace', () => {
    const tokens = tokenizers.whitespace('big-deal ok');
    expect(tokens).toEqual(['big-deal', 'ok']);
  });

  it('.whitespace should treat null as empty string', () => {
    const tokens = tokenizers.whitespace(null);
    expect(tokens).toEqual([]);
  });

  it('.whitespace should treat undefined as empty string', () => {
    const tokens = tokenizers.whitespace(undefined);
    expect(tokens).toEqual([]);
  });

  it('.nonword should tokenize on non-word characters', () => {
    const tokens = tokenizers.nonword('big-deal ok');
    expect(tokens).toEqual(['big', 'deal', 'ok']);
  });

  it('.nonword should treat null as empty string', () => {
    const tokens = tokenizers.nonword(null);
    expect(tokens).toEqual([]);
  });

  it('.nonword should treat undefined as empty string', () => {
    const tokens = tokenizers.nonword(undefined);
    expect(tokens).toEqual([]);
  });

  it('.obj.whitespace should tokenize on whitespace', () => {
    const t = tokenizers.obj.whitespace('val');
    const tokens = t({ val: 'big-deal ok' });

    expect(tokens).toEqual(['big-deal', 'ok']);
  });

  it('.obj.whitespace should accept multiple properties', () => {
    const t = tokenizers.obj.whitespace('one', 'two');
    const tokens = t({ one: 'big-deal ok', two: 'buzz' });

    expect(tokens).toEqual(['big-deal', 'ok', 'buzz']);
  });

  it('.obj.whitespace should accept array', () => {
    const t = tokenizers.obj.whitespace(['one', 'two']);
    const tokens = t({ one: 'big-deal ok', two: 'buzz' });

    expect(tokens).toEqual(['big-deal', 'ok', 'buzz']);
  });

  it('.obj.nonword should tokenize on non-word characters', () => {
    const t = tokenizers.obj.nonword('val');
    const tokens = t({ val: 'big-deal ok' });

    expect(tokens).toEqual(['big', 'deal', 'ok']);
  });

  it('.obj.nonword should accept multiple properties', () => {
    const t = tokenizers.obj.nonword('one', 'two');
    const tokens = t({ one: 'big-deal ok', two: 'buzz' });

    expect(tokens).toEqual(['big', 'deal', 'ok', 'buzz']);
  });

  it('.obj.nonword should accept array', () => {
    const t = tokenizers.obj.nonword(['one', 'two']);
    const tokens = t({ one: 'big-deal ok', two: 'buzz' });

    expect(tokens).toEqual(['big', 'deal', 'ok', 'buzz']);
  });
});
