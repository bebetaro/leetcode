function longestPalindrome(s: string): number {
  const map = new Map<string, number>();
  for (let index = 0; index < s.length; index++) {
    const item = map.get(s[index]) || 0;
    map.set(s[index], item + 1);
  }
  let res = 0;
  let isOdd = false;

  for (const [key, item] of map) {
    if (item % 2 === 0) {
      res += item;
    } else if (item % 2 === 1 && item > 2) {
      res += item - 1;
      isOdd = true;
    } else {
      isOdd = true;
    }
  }

  if (isOdd) {
    return res + 1;
  } else {
    return res;
  }
}
