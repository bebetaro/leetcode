function missingNumber(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const max = Math.max(...nums);
  nums.sort((a, b) => a - b);
  for (let index = 0; index <= max; index++) {
    if (nums[index] !== index) {
      return index;
    }
  }

  return max + 1;
}
