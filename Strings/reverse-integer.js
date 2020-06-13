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
