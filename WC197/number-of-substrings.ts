function numSub(s: string): number {
  const ones = s.match(/1+/g);
  let cnt = 0;
  if (ones === null || ones.length === 0) {
    return 0;
  }
  let len = 0;
  for (let index = 0; index < ones.length; index++) {
    if (ones[index].length > len) {
      len = ones[index].length;
    }
  }
  const map = new Map();
  map.set(1, 1);
  map.set(2, 3);
  for (let index = 3; index <= len; index++) {
    const num = map.get(index - 1);
    map.set(index, num + index);
  }
  for (let index = 0; index < ones.length; index++) {
    const num = ones[index].length;
    cnt += map.get(num);
  }
  const divider = Math.pow(10, 9) + 7;
  return cnt % divider;
}
