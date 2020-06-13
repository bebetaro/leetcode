/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const origin = s.split("");
  const target = t.split("");

  if (origin.length !== target.length) {
    return false;
  }

  for (let index = 0; index < origin.length; index++) {
    const num = target.findIndex((item) => item === origin[index]);
    if (num === -1) {
      return false;
    }
    target[num] = Infinity;
  }
  return true;
};

// sorted Answer

var isAnagram = function (s, t) {
  const origin = s.split("").sort().join("");
  const target = t.split("").sort().join("");
  if (origin === target) {
    return true;
  } else {
    return false;
  }
};
