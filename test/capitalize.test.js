
const capitalize = require('../src/capitalize');

test('return empty string on empty argument', () => {
    expect(capitalize()).toBe('');
});

test('return unchanged when first char is number', () => {
    expect(capitalize('4abdu')).toBe('4abdu');
});

test('capitalize abdulfetah', () => {
    expect(capitalize('abdulfetah')).toBe('Abdulfetah');
});

test('some random chars', () => {
    expect(capitalize('@~^')).toBe('@~^');
});