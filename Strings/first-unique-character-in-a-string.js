/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const arr = s.split("");
  const checked = [];
  for (let index = 0; index < arr.length; index++) {
    if (checked.includes(arr[index])) continue;
    if (!arr.slice(index + 1, arr.length).find((item) => item === arr[index])) {
      return index;
    }
    checked.push(arr[index]);
  }
  return -1;
};
