/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str = s.toLocaleLowerCase().match(/[a-z]|[0-9]/g);
  if (str === null) {
    return true;
  }
  if (str.join("") === str.reverse().join("")) {
    return true;
  } else {
    return false;
  }
};
