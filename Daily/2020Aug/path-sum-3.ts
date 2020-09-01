/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function pathSum(
  root: TreeNode | null,
  sum: number,
  arr: number[] = [],
  cnt: { value: number } = { value: 0 }
): number {
  if (root === null) {
    return cnt.value;
  }
  arr.push(0);
  for (let index = 0; index < arr.length; index++) {
    arr[index] += root.val;
    if (arr[index] === sum) {
      cnt["value"] = cnt.value + 1;
    }
  }

  pathSum(root.left, sum, [...arr], cnt);
  pathSum(root.right, sum, [...arr], cnt);
  return cnt.value;
}
