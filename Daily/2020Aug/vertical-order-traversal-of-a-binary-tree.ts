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

function verticalTraversal(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  const map = new Map<number, { val: number; depth: number }[]>();
  indexTraverse(root, map, 0, 0);
  const arr: number[][] = [];
  const keys = [...map.keys()].sort((a, b) => a - b);
  for (const key of keys) {
    const item = map.get(key) || [];
    item.sort((a, b) => {
      if (a.depth === b.depth) {
        return a.val - b.val;
      } else {
        return a.depth - b.depth;
      }
    });
    arr.push(item.map((i) => i.val));
  }
  return arr;
}

const indexTraverse = (
  root: TreeNode | null,
  _map: Map<number, { val: number; depth: number }[]>,
  width: number,
  depth: number
): void => {
  if (root === null) {
    return;
  }
  const item = _map.get(width) || [];
  item.push({ val: root.val, depth });
  _map.set(width, item);
  indexTraverse(root.left, _map, width - 1, depth + 1);
  indexTraverse(root.right, _map, width + 1, depth + 1);
};
