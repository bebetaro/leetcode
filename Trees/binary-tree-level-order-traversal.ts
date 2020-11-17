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

const levelOrder = (root: TreeNode | null): number[][] => {
  if (root === null) {
    return [];
  }
  const ans: number[][] = [];
  traverseBTS(root, ans, 0);
  return ans;
};

const traverseBTS = (root: TreeNode | null, arr: number[][], depth: number) => {
  if (root === null) {
    return;
  } else {
    if (arr[depth] === undefined) {
      arr.push([]);
    }
    arr[depth].push(root.val);
  }
  traverseBTS(root.left, arr, depth + 1);
  traverseBTS(root.right, arr, depth + 1);
};
