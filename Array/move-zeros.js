/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Using sort
const moveZeroes = (nums) => {
  nums.sort((pre, cur) => {
    if (pre === 0) {
      return 1;
    } else if (cur === 0) {
      return -1;
    }
  });
};
