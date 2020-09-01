function findDuplicates(nums: number[]): number[] {
  const traverseMap = new Map<number, number>();
  const resultMap = new Map<number, number>();
  for (let index = 0; index < nums.length; index++) {
    const item = traverseMap.get(nums[index]) || 0;
    const num = item + 1;
    if (num === 2) {
      resultMap.set(nums[index], nums[index]);
    }
    traverseMap.set(nums[index], num);
  }
  return [...resultMap.values()];
}
