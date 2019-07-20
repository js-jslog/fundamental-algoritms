const { findCommonDivisor } = require('./index');

test('finds 2 as the common divisor of 6 & 10', () => {
  expect(findCommonDivisor(6, 10)).toBe(2);
});

test('finds 2 as the common divisor of 6 & 10 when they are input the other way round', () => {
  expect(findCommonDivisor(10, 6)).toBe(2);
});
