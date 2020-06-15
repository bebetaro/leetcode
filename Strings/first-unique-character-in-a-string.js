/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map();
  for (let index = 0; index < s.length; index++) {
    if (map.has(s[index])) continue;
    if (!s.slice(index + 1, s.length).includes(s[index])) {
      return index;
    }
    map.set(s[index]);
  }
  return -1;
};

/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (s) {
  if (s === "") return -1;
  const reg = s
    .split("")
    .sort()
    .join("")
    .match(/(.)\1{0,}/g)
    .filter((item) => item.length === 1)
    .map((item) => s.indexOf(item));
  return reg.length > 0 ? Math.min(...reg) : -1;
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  if (s.length == 0) return -1;
  for (let index = 0; index < s.length; index++) {
    if (s.indexOf(s[index]) === s.lastIndexOf(s[index])) return index;
  }
  return -1;
};
