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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  return traverseBST(root, key);
}

const traverseBST = (root: TreeNode | null, key: number) => {
  if (root === null) {
    return root;
  }
  if (root.val < key) {
    root.right = traverseBST(root.right, key);
  } else if (root.val > key) {
    root.left = traverseBST(root.left, key);
  } else if (root.val === key) {
    // If root has no children;
    if (!root.left && !root.right) {
      root = null;
    }
    // If root has one children;
    else if (!root.left) {
      root = root.right;
    } else if (!root.right) {
      root = root.left;
    }

    // If root has two children;
    else {
      let node = getMin(root.right);
      root.val = node.val;
      root.right = traverseBST(root.right, node.val);
    }
  }
  return root;
};

function getMin(root: TreeNode | null): TreeNode {
  let current = root;
  // @ts-ignore
  while (current.left) {
    // @ts-ignore
    current = current.left;
  }
  // @ts-ignore
  return current;
}
