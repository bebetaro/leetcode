impl Solution {
  pub fn num_sub(s: String) -> i32 {
  let ones = s.match(/1+/g);
  let mut cnt = 0;
  if (ones === null || ones.length === 0) {
    return 0;
  }
  const map = new Map();
  for (let index = 0; index < ones.length; index++) {
    const num = ones[index];
    const bits = Number.parseInt("1".repeat(num.length), 2);
    const bit = Number.parseInt(num, 2);
    if (map.has(num)) {
      cnt += map.get(num);
    } else {
      let count = 0;
      for (let b = 0; b <= bits; b++) {
        const combination = bit & b;
        const oneLen = combination.toString(2).match(/1+/g);
        if (oneLen === null) continue;
        if (oneLen.length === 1) {
          count++;
        }
      }
      map.set(num, count);
      cnt += count;
    }
  }
  return cnt;
    }
}