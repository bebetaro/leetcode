function rangeSum(
  nums: number[],
  n: number,
  left: number,
  right: number
): number {
  if (nums.length === 0) {
    return 0;
  }
  const ans: number[] = [];
  for (let index = 0; index < nums.length; index++) {
    const arr = nums.slice(index, nums.length);
    ans.push(nums[index]);
    arr.reduce((pre, cur) => {
      const sum = pre + cur;
      ans.push(sum);
      return sum;
    });
  }
  ans.sort((a, b) => a - b);
  return ans.slice(left - 1, right).reduce((pre, cur) => pre + cur);
}
