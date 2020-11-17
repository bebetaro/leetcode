/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const iSet = new Set<number>();
  const jSet = new Set<number>();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        iSet.add(i);
        jSet.add(j);
      }
    }
  }

  iSet.forEach((item) => {
    for (let index = 0; index < matrix[0].length; index++) {
      matrix[item][index] = 0;
    }
  });
  jSet.forEach((item) => {
    for (let index = 0; index < matrix.length; index++) {
      matrix[index][item] = 0;
    }
  });
}
