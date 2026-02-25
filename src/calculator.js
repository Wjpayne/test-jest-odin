function isValidNumber(value) {
  return Number.isFinite(value);
}

const calculator = {
  add(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) return null;
    return a + b;
  },

  subtract(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) return null;
    return a - b;
  },

  multiply(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) return null;
    return a * b;
  },

  divide(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) return null;
    if (b === 0) return null;
    return a / b;
  },
};

export default calculator;
