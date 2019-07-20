const performEuclidsStep = function performEuclidsStep(smallInput, largeInput) {
  const remainder = largeInput % smallInput;
  return [remainder, smallInput];
};

const findCommonDivisor = function findCommonDivisor(smallInput, largeInput) {
  const newPair = performEuclidsStep(smallInput, largeInput);
  if (newPair[0] === 0) {
    return newPair[1];
  }
  return findCommonDivisor(newPair[0], newPair[1]);
};

module.exports = { findCommonDivisor };
