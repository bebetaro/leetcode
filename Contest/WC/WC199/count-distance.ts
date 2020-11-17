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

function countPairs(root: TreeNode | null, distance: number): number {
  if (root === null) {
    return 0;
  }
  let cnt = { count: 0 };
  findLeafAndDistance(root, distance, cnt, []);
  return cnt.count;
}

const findLeafAndDistance = (
  root: TreeNode | null,
  distance: number,
  cnt: { count: number },
  arr: number[]
): number[] => {
  if (root === null) {
    return [];
  }
  if (root.right === null && root.left === null) {
    return [1];
  }
  const left = findLeafAndDistance(root.left, distance, cnt, arr);
  const right = findLeafAndDistance(root.right, distance, cnt, arr);
  for (const i of left) {
    for (const j of right) {
      if (distance >= i + j) {
        cnt.count += 1;
      }
    }
  }
  return [...left, ...right].map((item) => item + 1);
};
