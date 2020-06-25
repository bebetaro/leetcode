function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  if (root.left === null && root.right === null) {
    return [[root.val]];
  }

  const left = levelOrder(root.left);
  const right = levelOrder(root.right);
  const merge = mergeArray(left, right);
  return [[root.val], ...merge];
}
// arr1がleft, arr2がrightとなる
const mergeArray = (arr1: number[][], arr2: number[][]) => {
  let [short, long] = arr1.length > arr2.length ? [arr2, arr1] : [arr1, arr2];

  for (let index = 0; index < short.length; index++) {
    long[index] = [...arr1[index], ...arr2[index]];
  }
  return long;
};

const collectAllNode = (root: TreeNode | null): number[][] => {
  if (root === null) {
    return [[]];
  }
  if (root.left === null && root.right === null) {
    return [[root.val]];
  }
  const left = collectAllNode(root.left);
  const right = collectAllNode(root.right);

  const merge = mergeArray(left, right);

  return merge;
};
