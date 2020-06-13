/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const len = needle.length;
  const arr = haystack.split("");
  for (let index = len - 1; index < arr.length; index++) {
    let ans = [];
    if (arr[index] === needle[len - 1]) {
      for (let j = 0; j < len; j++) {
        ans.push(arr[index - (len - 1) + j]);
      }
    }
    if (ans.join("") === needle) {
      return index - (len - 1);
    }
  }
  return -1;
};
