/**
 * @param {number[]} nums
 * @return {boolean}
 */

//  first correct!
const containsDuplicate = (nums) => {
  let ans = false;
  nums.sort();
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      ans = true;
      break;
    }
  }
  return ans;
};

// Second Answer
const containsDuplicate = (nums) => {
  const ans =
    nums.length > 1 &&
    nums
      .sort()
      .reduce((pre, cur) => (pre === true ? true : pre === cur ? true : cur));

  return typeof ans === "number" ? false : ans;
};

const containsDuplicate = (nums) => {
  let ans = false;
  nums.length > 1 &&
    nums.sort().reduce((pre, cur) => {
      if (pre === cur) {
        ans = true;
      }
      return cur;
    });
  return ans;
};

// Map
const containsDuplicate = (nums) => {
  const map = new Map();
  for (const v of nums) {
    if (map.has(v)) return true;
    map.set(v);
  }
  return false;
};
