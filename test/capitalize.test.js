import capitalize from "../src/capitalize.js";

test("capitalizes the first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});