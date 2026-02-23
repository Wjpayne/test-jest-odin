import capitalize from "../src/capitalize.js";

test("capitalizes the first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("returns empty string if given empty string", () => {
  expect(capitalize("")).toBe("");
});