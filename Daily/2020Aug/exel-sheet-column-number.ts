function titleToNumber(s: string): number {
  let res = 0;
  for (let index = 0; index < s.length; index++) {
    const code = s.charCodeAt(index) - 64;
    const power = s.length - 1 - index;
    res += code * Math.pow(26, power);
  }
  return res;
}
