function minDifference(nums: number[]): number {
  if (5 > nums.length) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    for (let index = 0; index < 3; index++) {
      let temp = nums[i];
      let diff = 0;
      for (let j = 0; j < nums.length; j++) {
        if(num)
      }
    }
  }
  return getDiff(nums);
}

const getDiff = (arr: number[]): number => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
};
