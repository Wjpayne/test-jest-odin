import calculator from "../src/calculator.js";

describe("calculator", () => {
  test("adds two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test("multiplies two numbers", () => {
    expect(calculator.multiply(3, 5)).toBe(15);
  });

  test("divides two numbers", () => {
    expect(calculator.divide(20, 4)).toBe(5);
  });

  test("returns null when dividing by zero", () => {
    expect(calculator.divide(10, 0)).toBeNull();
  });

  test("works with negative numbers", () => {
    expect(calculator.add(-2, -3)).toBe(-5);
  });
  test("subtract works with negative numbers", () => {
    expect(calculator.subtract(-5, -2)).toBe(-3);
  });

  test("multiply works with negative numbers", () => {
    expect(calculator.multiply(-3, 2)).toBe(-6);
  });

  test("divide works with negative numbers", () => {
    expect(calculator.divide(-10, 2)).toBe(-5);
  });

  test("returns null if inputs are not numbers", () => {
    expect(calculator.add("2", 3)).toBeNull();
    expect(calculator.multiply(2, NaN)).toBeNull();
    expect(calculator.divide(2, Infinity)).toBeNull();
  });

  test("handles floating point numbers", () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
