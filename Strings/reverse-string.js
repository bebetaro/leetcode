/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  s.reverse();
};

/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  let temp = "";
  const len = Math.floor(s.length / 2);
  for (let index = 0; index < len; index++) {
    temp = s[index];
    s[index] = s[s.length - 1 - index];
    s[s.length - 1 - index] = temp;
  }
};
