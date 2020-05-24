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
};

// const WrongRemoveDuplicates = (nums) =>
//   nums.filter((val, index) => val !== nums[index + 1]).length;

// const WrongRemoveDuplicates2 = (nums) => {
//   nums = nums.filter((val, index) => val !== nums[index + 1]).length;
//   return nums.length;
// };
