function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false;
  }
  const left = [];
  for (let index = 0; index < s.length; index++) {
    if (s[index] === ")" || s[index] === "]" || s[index] === "}") {
      if (matchParentheses(s[index]) !== left[left.length - 1]) {
        return false;
      } else {
        left.pop();
      }
    } else {
      left.push(s[index]);
    }
  }
  if (left.length > 0) {
    return false;
  }
  return true;
}

const matchParentheses = (right: string) => {
  switch (right) {
    case ")":
      return "(";
    case "]":
      return "[";
    case "}":
      return "{";
    default:
      return "#";
  }
};
