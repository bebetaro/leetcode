function repeatedSubstringPattern(s: string): boolean {
  let sub = "";
  for (let index = 0; index < Math.floor(s.length / 2); index++) {
    sub += s[index];
    if (s.split(sub).join("") === "") {
      return true;
    }
  }
  return false;
}

// function repeatedSubstringPattern(s: string): boolean {
//     return s.repeat(2).slice(1, -1).includes(s);
// };
