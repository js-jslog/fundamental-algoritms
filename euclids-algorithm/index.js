const findCommonDivisor = function findCommonDivisor(smallInput, largeInput) {
  const remainder = largeInput % smallInput;

  if (remainder === 0) return smallInput;

  return findCommonDivisor(remainder, smallInput);
};

module.exports = { findCommonDivisor };
