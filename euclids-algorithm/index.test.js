const { findCommonDivisor } = require('./index');

test('finds 2 as the common divisor of 6 & 10', () => {
  expect(findCommonDivisor(6, 10)).toBe(2);
});
