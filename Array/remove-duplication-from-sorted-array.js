/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let ans = 0;
  nums.forEach((_, index) => {
    if (nums[index] !== nums[index + 1]) {
      nums[ans] = nums[index];
      ans++;
    }
  });
  return ans;
};