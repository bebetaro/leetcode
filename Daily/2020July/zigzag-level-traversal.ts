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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  const arr = traverseTreeNode(root, 0, []);
  for (let index = 0; index < arr.length; index++) {
    if (index % 2 === 1) {
      arr[index] = arr[index].reverse();
    }
  }
  return arr;
}

const traverseTreeNode = (
  node: TreeNode | null,
  index: number,
  ans: number[][]
): number[][] => {
  if (node === null) {
    return ans;
  }
  if (ans[index] === undefined) {
    ans.push([]);
  }

  ans[index].push(node.val);
  traverseTreeNode(node.left, index + 1, ans);
  traverseTreeNode(node.right, index + 1, ans);
  return ans;
};
