function orangesRotting(grid: number[][]): number {
  const dp = [];
  for (let i = 0; i < grid.length; i++) {
    const _arr = [];
    for (let j = 0; j < grid[0].length; j++) {
      _arr.push(Infinity);
    }
    dp.push(_arr);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        searchAroundOne(arrDeepCopy(grid), dp, i - 1, j, 0), //up
          searchAroundOne(arrDeepCopy(grid), dp, i, j - 1, 0), //left
          searchAroundOne(arrDeepCopy(grid), dp, i, j + 1, 0), //right
          searchAroundOne(arrDeepCopy(grid), dp, i + 1, j, 0); //down
      }
    }
  }
  let cnt = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        if (dp[i][j] === Infinity) {
          return -1;
        } else {
          cnt = Math.max(cnt, dp[i][j]);
        }
      }
    }
  }
  return cnt;
}

const searchAroundOne = (
  grid: number[][],
  dp: number[][],
  i: number,
  j: number,
  count: number
): void => {
  if (i === -1 || i > grid.length - 1 || j === -1 || j > grid[0].length - 1) {
    return;
  }
  if (grid[i][j] === 1) {
    grid[i][j] = 2;
    dp[i][j] = Math.min(dp[i][j], count + 1);

    searchAroundOne(arrDeepCopy(grid), dp, i - 1, j, count + 1), //up
      searchAroundOne(arrDeepCopy(grid), dp, i, j - 1, count + 1), //left
      searchAroundOne(arrDeepCopy(grid), dp, i, j + 1, count + 1), //right
      searchAroundOne(arrDeepCopy(grid), dp, i + 1, j, count + 1); //down
    return;
  } else {
    return;
  }
};

const arrDeepCopy = (arr: number[][]): number[][] => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push([...arr[i]]);
  }
  return res;
};
