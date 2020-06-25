function isValidBST(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  return traverseBST(null, null, root);
}

const traverseBST = (
  high: number | null,
  low: number | null,
  root: TreeNode | null
): boolean => {
  if (root === null) {
    return true;
  }
  if (high !== null && root.val >= high) {
    return false;
  }
  if (low !== null && low >= root.val) {
    return false;
  }

  const left = traverseBST(root.val, low, root.left);
  const right = traverseBST(high, root.val, root.right);

  return left && right;
};
