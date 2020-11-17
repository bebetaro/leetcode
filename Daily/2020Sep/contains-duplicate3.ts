function containsNearbyAlmostDuplicate(
  nums: number[],
  k: number,
  t: number
): boolean {
  for (let i = 0; i < nums.length - k; i++) {
    const list = nums.slice(i + 1, i + k + 1);
    for (let j = 0; j < list.length; j++) {
      if (Math.abs(nums[i] - list[j]) <= t) {
        return true;
      }
    }
  }
  return false;
}
