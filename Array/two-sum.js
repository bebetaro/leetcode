/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// first correct brute force
const twoSum = function (nums, target) {
  let ans = [];
  nums.forEach((_, i) => {
    const rest = target - nums[i];
    for (let index = i + 1; index < nums.length; index++) {
      if (nums[index] === rest) {
        ans = [i, index];
      }
    }
  });
  return ans;
};

// improved brute forth
const twoSum = function (nums, target) {
  let ans = [];
  dual: for (let index = 0; index < nums.length; index++) {
    const rest = target - nums[index];
    for (let i = index + 1; i < nums.length; i++) {
      if (nums[i] === rest) {
        ans = [index, i];
        break dual;
      }
    }
  }
  return ans;
};

// HashMap much faster!
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = new Map();

  nums.forEach((_, i) => {
    map.set(nums[i], i);
  });

  for (let index = 0; index < nums.length; index++) {
    const rest = target - nums[index];
    if (map.has(rest) && map.get(rest) !== index) {
      return [index, map.get(rest)];
    }
  }
};

// One Pass
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = new Map();

  for (let index = 0; index < nums.length; index++) {
    const rest = target - nums[index];
    if (map.has(rest)) {
      return [index, map.get(rest)];
    }
    map.set(nums[index], index);
  }
};
