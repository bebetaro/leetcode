function maxSubArray(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  const arr = [];
  for (let i = 2; i < nums.length + 1; i++) {
    const num = nums.slice(0, i).reduce((pre, cur) => pre + cur);
    arr.push(num);
  }
  let max = Math.max(nums[0], ...arr);

  for (let index = 1; index < nums.length; index++) {
    const acc = nums.slice(0, index).reduce((pre, cur) => pre + cur);
    for (let j = index - 1; j < arr.length; j++) {
      const ans = arr[j] - acc;
      if (ans > max) {
        max = ans;
      }
    }
  }
  return max;
}
