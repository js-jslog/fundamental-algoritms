const findCommonDivisor = function findCommonDivisor(input1, input2) {
  const remainder = input1 % input2;

  if (remainder === 0) return input2;

  return findCommonDivisor(input2, remainder);
};

module.exports = { findCommonDivisor };
