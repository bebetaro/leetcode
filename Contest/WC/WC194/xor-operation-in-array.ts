// nums[i] = start + 2*i

function xorOperation(n: number, start: number): number {
  const arr = [];
  for (let index = 0; index < n; index++) {
    arr.push(start + 2 * index);
  }

  return arr.reduce((pre, cur) => pre ^ cur);
}
