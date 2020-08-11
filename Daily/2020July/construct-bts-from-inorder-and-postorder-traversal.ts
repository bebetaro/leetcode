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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0 && postorder.length === 0) {
    return null;
  }
  if (inorder.length === 1 && postorder.length === 1) {
    return new TreeNode(inorder[0], null, null);
  }
  const rootIndex = inorder.indexOf(postorder[postorder.length - 1]);
  const inLeft = inorder.slice(0, rootIndex);
  const inRight = inorder.slice(rootIndex + 1);
  const postLeft = postorder.slice(0, inLeft.length);
  const postRight = postorder.slice(inLeft.length);
  postRight.pop();
  const left = buildTree(inLeft, postLeft);
  const right = buildTree(inRight, postRight);

  return new TreeNode(inorder[rootIndex], left, right);
}
