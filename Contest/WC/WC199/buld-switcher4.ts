function minFlips(target: string): number {
  let ans = "0".repeat(target.length);
  let index = 0;
  let cnt = 0;
  while (ans !== target || index < target.length) {
    if (target[index] === ans[index]) {
      index++;
      continue;
    } else {
      const former = ans.slice(0, index + 1);
      const latter = target[index].repeat(ans.length - former.length);
      ans = former + latter;
      index++;
      cnt++;
    }
  }
  return cnt;
}
