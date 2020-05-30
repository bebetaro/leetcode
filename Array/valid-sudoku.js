/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const foundMap = new Map();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num !== ".") {
        if (
          foundMap.has(`found ${num} at row${i}`) ||
          foundMap.has(`found ${num} at column${j}`) ||
          foundMap.has(
            `found ${num} at subbox${Math.floor(i / 3)} & ${Math.floor(j / 3)}`
          )
        ) {
          return false;
        }
        foundMap.set(`found ${num} at row${i}`);
        foundMap.set(`found ${num} at column${j}`);
        foundMap.set(
          `found ${num} at subbox${Math.floor(i / 3)} & ${Math.floor(j / 3)}`
        );
      }
    }
  }
  return true;
};
