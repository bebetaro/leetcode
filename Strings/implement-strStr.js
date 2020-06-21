/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const len = needle.length;
  for (let index = len - 1; index < haystack.length; index++) {
    let ans = "";
    if (
      haystack[index] === needle[len - 1] &&
      haystack[index - (len - 1)] === needle[0]
    ) {
      for (let j = 0; j < len; j++) {
        ans += haystack[index - (len - 1) + j];
      }
    }
    if (ans === needle) {
      return index - (len - 1);
    }
  }
  return -1;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};
