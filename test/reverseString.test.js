import reverseString from "../src/reverseString";

test("reverses a simple string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverses a string with spaces", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("reverses a string with punctuation", () => {
  expect(reverseString("hello!")).toBe("!olleh");
});

test("returns empty string if given empty string", () => {
  expect(reverseString("")).toBe("");
});

test("handles single character strings", () => {
  expect(reverseString("a")).toBe("a");
});

test("handles palindromic strings", () => {
  expect(reverseString("madam")).toBe("madam");
});

test("handles non-alphabetic characters", () => {
  expect(reverseString("12345")).toBe("54321");
});