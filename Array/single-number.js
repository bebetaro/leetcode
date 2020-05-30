/**
 * @param {number[]} nums
 * @return {number}
 */

//  first correct
const singleNumber = function (nums) {
  const map = new Map();
  nums.forEach((val) => {
    if (map.has(val)) {
      map.set(val, 2);
    } else {
      map.set(val, 1);
    }
  });
  for (const [key, value] of map.entries()) {
    if (value === 1) return key;
  }
};

// bit manipulation

const singleNumber = function (nums) {
  let bit = 0;
  nums.forEach((val) => {
    bit ^= val;
  });
  return bit;
};
