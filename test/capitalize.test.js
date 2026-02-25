import capitalize from "../src/capitalize.js";

test("capitalizes the first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("returns empty string if given empty string", () => {
  expect(capitalize("")).toBe("");
});

test("does not change the rest of the string", () => {
  expect(capitalize("hELLO")).toBe("HELLO");
});

test("handles single character strings", () => {
  expect(capitalize("a")).toBe("A");
});

test("handles already capitalized strings", () => {
  expect(capitalize("Hello")).toBe("Hello");
});
test("handles non-alphabetic characters", () => {
  expect(capitalize("1hello")).toBe("1hello");
});