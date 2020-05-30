/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//  first correct
// const rotate = (nums, k) => {
//   Array(k)
//     .fill(0)
//     .forEach(() => {
//       nums.unshift(nums.pop());
//     });
// };

// improved one
// const rotate = (nums, k) => {
//   // 変数挟むほうが早くなる
//   const arr = [
//     ...nums.slice(nums.length - k, nums.length),
//     ...nums.slice(0, nums.length - k),
//   ];
//   arr.forEach((_, i) => {
//     nums[i] = arr[i];
//   });
// };
