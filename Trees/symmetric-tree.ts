function isSymmetric(root: TreeNode | null): boolean {
  if (root === null || (root.right === null && root.left === null)) {
    return true;
  }
  if (root.right === null || root.left === null) {
    return false;
  }

  const left = getAllNodeLeft(root.left);
  const right = getAllNodeRight(root.right);

  if (left.length !== right.length) {
    return false;
  }

  for (let index = 0; index < left.length; index++) {
    if (left[index] !== right[index]) {
      return false;
    }
  }

  return true;
}

const getAllNodeLeft = (node: TreeNode | null): number[] => {
  if (node === null) {
    return [Infinity];
  }
  if (node.right === null && node.left === null) {
    return [node.val];
  }
  const left = getAllNodeLeft(node.left);
  const right = getAllNodeLeft(node.right);

  return [node.val, ...left, ...right];
};

const getAllNodeRight = (node: TreeNode | null): number[] => {
  if (node === null) {
    return [Infinity];
  }
  if (node.right === null && node.left === null) {
    return [node.val];
  }
  const left = getAllNodeRight(node.left);
  const right = getAllNodeRight(node.right);

  return [node.val, ...right, ...left];
};
