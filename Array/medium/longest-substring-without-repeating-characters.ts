function lengthOfLongestSubstring(s: string): number {
  let temp: string[] = [];
  let res = 0;
  for (let index = 0; index < s.length; index++) {
    if (temp.includes(s[index])) {
      res = Math.max(res, temp.length);
      const idx = temp.indexOf(s[index]);
      temp = temp.slice(idx + 1);
      temp.push(s[index]);
    } else {
      temp.push(s[index]);
    }
  }
  return Math.max(res, temp.length);
}
