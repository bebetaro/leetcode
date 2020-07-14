/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return n
    .toString(2)
    .split("")
    .map(Number)
    .reduce((pre, cur) => pre + cur);
};

var hammingWeight = function (n) {
  let cnt = 0;
  let mask = 1;
  for (let index = 0; index < 32; index++) {
    if (n & mask) {
      cnt++;
    }
    mask <<= 1;
  }

  return cnt;
};
