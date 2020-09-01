class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sumOfLeftLeaves(
  root: TreeNode | null,
  res: { sum: number } = { sum: 0 },
  isLeft: boolean = false
): number {
  if (root === null) {
    return res.sum;
  }
  if (isLeft && root.left === null && root.right === null) {
    res.sum += root.val;
    return res.sum;
  }
  sumOfLeftLeaves(root.left, res, true);
  sumOfLeftLeaves(root.right, res, false);
  return res.sum;
}
