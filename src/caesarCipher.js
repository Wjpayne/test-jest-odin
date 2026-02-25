export default function caesarCipher(string, shift) {
  if (!string) return "";

  const normalizedShift = ((shift % 26) + 26) % 26;

  return [...string]
    .map((char) => {
      if (!/[a-z]/i.test(char)) return char;

      const isUpper = char === char.toUpperCase();
      const base = isUpper ? 65 : 97;

      const code = char.charCodeAt(0) - base;

      const shifted = (code + normalizedShift) % 26;

      return String.fromCharCode(shifted + base);
    })
    .join("");
}