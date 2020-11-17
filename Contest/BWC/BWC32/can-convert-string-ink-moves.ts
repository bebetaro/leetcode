function canConvertString(s: string, t: string, k: number): boolean {
  if (s.length !== t.length) {
    return false;
  }
  if (s === t) {
    return true;
  }
  let cnt = 0;

  for (let index = 0; index < s.length; index++) {
    cnt += Math.abs(s.charCodeAt(index) - t.charCodeAt(index));
  }
  if (cnt <= k) {
    return true;
  } else {
    return false;
  }
}
