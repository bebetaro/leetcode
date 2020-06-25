/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const jsSortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  if (nums.length === 1) {
    return new TreeNode(nums[0], null, null);
  }
  const mid = Math.floor(nums.length / 2);
  const left = sortedArrayToBST(nums.slice(0, mid));
  const right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
  return new TreeNode(nums[mid], left, right);
};
