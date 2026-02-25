import { getAverage, getMin, getMax, getLength, validateArray } from "../src/analyzeArray";
import analyzeArray from "../src/analyzeArray";

describe("analyzeArray", () => {
  test("returns null for invalid input", () => {
    expect(analyzeArray("not an array")).toBeNull();
    expect(analyzeArray([1, "2", 3])).toBeNull();
    expect(analyzeArray([])).toBeNull();
  });

  test("analyzes array correctly", () => {
    const result = analyzeArray([1, 2, 3, 4]);
    expect(result).toEqual({
      average: 2.5,
      min: 1,
      max: 4,
      length: 4,
    });
  });
});

test("calculates average", () => {
  expect(getAverage([1, 2, 3, 4])).toBe(2.5);
});

test("calculates min", () => {
  expect(getMin([1, 2, 3, 4])).toBe(1);
});

test("calculates max", () => {
  expect(getMax([1, 2, 3, 4])).toBe(4);
});

test("calculates length", () => {
  expect(getLength([1, 2, 3, 4])).toBe(4);
});

test("validates array", () => {
  expect(validateArray([1, 2, 3])).toBe(true);
  expect(validateArray([1, "2", 3])).toBe(false);
  expect(validateArray("not an array")).toBe(false);
  expect(validateArray([])).toBe(true);
});


