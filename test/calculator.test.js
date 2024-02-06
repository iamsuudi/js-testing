const Calculate = require('../src/calculator');

test('Add 1 + 2', () => {
    expect(new Calculate(1, 2).add()).toBe(3);
})

test('sub 1 - 2', () => {
    expect(new Calculate(1, 2).sub()).toBe(-1);
})

test('multip 1 * 2', () => {
    expect(new Calculate(1, 2).multip()).toBe(2);
})

test('multip by zero', () => {
    expect(new Calculate(4, 0).multip()).toBe(0);
})

test('div 1 / 2', () => {
    expect(new Calculate(1, 2).div()).toBeCloseTo(1 / 2);
})

test('div by zero', () => {
    expect(new Calculate(1, 0).div()).toBe("Can't divide by zero");
})