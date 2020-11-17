// targetを引いている
// Startからtarget分を差し引いてぴったりの数字がある=>すなわちそこまででtarget分進んだと考えられる
// これにより答えを導ける

function maxNonOverlapping(nums: number[], target: number): number {
  const map = new Map<number, number>();
  map.set(0, 0);
  let ans = 0;
  let sum = 0;
  for (let index = 0; index < nums.length; index++) {
    sum += nums[index];
    if (map.has(sum - target)) {
      // @ts-ignore
      ans = Math.max(ans, map.get(sum - target) + 1);
    }
    map.set(sum, ans);
  }
  return ans;
}
