function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  const findDepthNumber = (depth: number, node: TreeNode): number => {
    if (node.left === null && node.right === null) {
      return depth;
    }
    const left = node.left ? findDepthNumber(depth + 1, node.left) : depth;
    const right = node.right ? findDepthNumber(depth + 1, node.right) : depth;

    return Math.max(left, right);
  };
  return findDepthNumber(1, root);
}
