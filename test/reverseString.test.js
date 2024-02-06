const reverseString = require('../src/reverseString');

test('starting', () => {
    expect(reverseString()).toBe('');
});

test('reverse abcd', () => {
    expect(reverseString('abcd')).toBe('dcba');
})

test('mixed string', () => {
    expect(reverseString('1a$ b-d')).toBe('d-b $a1');
})