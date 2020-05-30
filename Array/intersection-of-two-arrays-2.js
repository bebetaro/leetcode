/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// first correct answer
const intersect = (nums1, nums2) => {
  let arr = [];
  nums1.forEach((_, i) => {
    const num = nums2.indexOf(nums1[i]);
    if (num > -1) arr = [...arr, nums1[i]];
    nums2[num] = Infinity;
  });
  return arr;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// little bit improved
const intersect = (nums1, nums2) =>
  nums1.filter((item) => {
    const num = nums2.indexOf(item);
    if (num > -1) {
      nums2[num] = Infinity;
      return true;
    } else {
      false;
    }
  });
