function makeGood(s: string): string {
  if (s.length === 0 || s.length === 1) {
    return s;
  }
  let next = true;
  while (next) {
    next = false;
    for (let index = 1; index < s.length; index++) {
      if (s[index - 1].toLocaleLowerCase() !== s[index].toLocaleLowerCase())
        continue;
      const former =
        s[index - 1].toLocaleLowerCase() === s[index - 1] ? "small" : "big";
      const latter =
        s[index].toLocaleLowerCase() === s[index] ? "small" : "big";
      if (former !== latter) {
        s = s.slice(0, index - 1) + s.slice(index + 1);
        next = true;
      }
    }
  }
  return s;
}
