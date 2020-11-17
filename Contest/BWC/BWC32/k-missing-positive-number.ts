function findKthPositive(arr: number[], k: number): number {
  const ans: number[] = [];
  let index = 0;
  let num = 1;
  while (ans.length !== k) {
    if (num !== arr[index]) {
      ans.push(num);
      num++;
    } else {
      index++;
      num++;
    }
  }
  return ans[k - 1];
}
