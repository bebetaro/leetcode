/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let acc = 0;
  return nums.map((item) => {
    acc += item;
    return acc;
  });
};
