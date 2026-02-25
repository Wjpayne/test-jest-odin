function validateArray(arr) {
  return Array.isArray(arr) && arr.every(Number.isFinite);
}

function getAverage(arr) {
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

function getMin(arr) {
  return Math.min(...arr);
}

function getMax(arr) {
  return Math.max(...arr);
}

function getLength(arr) {
  return arr.length;
}

export default function analyzeArray(arr) {
  if (!validateArray(arr) || arr.length === 0) return null;

  return {
    average: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: getLength(arr),
  };
}

export { getAverage, getMin, getMax, getLength, validateArray };