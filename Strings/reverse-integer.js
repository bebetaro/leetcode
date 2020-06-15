/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const str = x.toString();
  if (str[0] === "-") {
    x = "-" + str.split("").slice(1, str.length).reverse().join("");
  } else {
    x = str.split("").reverse().join("");
  }
  if (x > Math.pow(2, 31) || Math.pow(-2, 31) > x) {
    return 0;
  } else {
    return Number(x);
  }
};

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let first = "";
  const str = x.toString().split("");
  if (x < 0) {
    first = str.shift();
  }
  x = str.reverse().join("");

  if (x > Math.pow(2, 31)) return 0;

  return first + x;
};

var reverse = function (x) {
  let reversedNumber = x
    .toString()
    .split("")
    .filter((letter) => letter !== "-")
    .reverse()
    .join("");

  if (reversedNumber > Math.pow(2, 31)) {
    return 0;
  }

  return x < 0 ? Number("-" + reversedNumber) : Number(reversedNumber);
};
