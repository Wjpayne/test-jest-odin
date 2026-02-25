import caesarCipher from "../src/caesarCipher.js";

describe("caesarCipher", () => {
  test("shifts letters", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });

  test("wraps around alphabet", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("preserves case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("keeps punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("works with large shifts", () => {
    expect(caesarCipher("abc", 29)).toBe("def");
  });

  test("works with negative shifts", () => {
    expect(caesarCipher("def", -3)).toBe("abc");
  });

  test("returns empty string for empty input", () => {
    expect(caesarCipher("", 5)).toBe("");
  });
});