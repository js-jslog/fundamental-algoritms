const { findCommonDivisor } = require('./index');

test('finds 2 as the common divisor of 6 & 10', () => {
  expect(findCommonDivisor(6, 10)).toBe(2);
});

test('finds 2 as the common divisor of 6 & 10 when they are input the other way round', () => {
  expect(findCommonDivisor(10, 6)).toBe(2);
});

test('finds 12 as the common divisor of 168 & 180', () => {
  expect(findCommonDivisor(168, 180)).toBe(12);
});

test('finds 6 as the common divisor of 12 & 18', () => {
  expect(findCommonDivisor(12, 18)).toBe(6);
});

test('finds 21 as the common divisor of 3846 & 153', () => {
  expect(findCommonDivisor(3846, 153)).toBe(3);
});

test('finds 6 as the common divisor of 24 & 54', () => {
  expect(findCommonDivisor(24, 54)).toBe(6);
});

test('finds 6 as the common divisor of 18 & 42', () => {
  expect(findCommonDivisor(18, 42)).toBe(6);
});

test('finds 2 as the common divisor of 244 & 354', () => {
  expect(findCommonDivisor(244, 354)).toBe(2);
});

test('finds 23 as the common divisor of 2415 & 3289', () => {
  expect(findCommonDivisor(2415, 3289)).toBe(23);
});

test('finds 46 as the common divisor of 4278 & 8602', () => {
  expect(findCommonDivisor(4278, 8602)).toBe(46);
});

test('finds 1 as the common divisor of 220 & 1323; ie they are \'relatively prime\'', () => {
  expect(findCommonDivisor(220, 1323)).toBe(1);
});
