export default function capitalize(string) {
    if (typeof string !== "string") return "";
    if (string.length === 0) {
        return "";
    }
  return string[0].toUpperCase() + string.slice(1);
}

