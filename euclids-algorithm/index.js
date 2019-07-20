const findCommonDivisor = function findCommonDivisor(input1, input2) {
  const remainder = input2 % input1;

  if (remainder === 0) return input1;

  return findCommonDivisor(remainder, input1);
};

module.exports = { findCommonDivisor };
