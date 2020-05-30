/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  const times = Math.floor(matrix.length / 2);
  let temp = [];
  let temp2 = [];
  for (let index = 0; index < times; index++) {
    for (let j = index; j < matrix.length - index; j++) {
      temp[j] = matrix[matrix.length - 1 - j][matrix.length - 1 - index];
      matrix[matrix.length - 1 - j][matrix.length - 1 - index] =
        matrix[index][matrix.length - 1 - j];
    }
    for (let k = index; k < matrix.length - index; k++) {
      temp2[k] = matrix[matrix.length - 1 - index][k];
      matrix[matrix.length - 1 - index][k] = temp[k];
    }

    temp2[temp2.length - 1] = temp[0 + index];

    for (let l = index; l < matrix.length - index; l++) {
      temp[l] = matrix[l][index];
      matrix[l][index] = temp2[l];
    }

    temp[temp.length - 1] = temp2[0 + index];
    for (let m = index; m < matrix.length - index; m++) {
      matrix[index][m] = temp[matrix.length - 1 - m];
    }
    temp = [];
    temp2 = [];
  }
};
