/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  str = str.trim().split(" ")[0];
  // 数式を含んでいないケースを排除している
  if (!/\d/.test(str)) {
    return 0;
  }

  // 先頭以外の'+'または'-'を排除している
  // '.'は小数点を含んだ数字のために取り込んでいる
  const num = str.match(/^-|^\+|\.|\d*/g);
  let ans = num[0] + num[1];

  if (isNaN(ans) || num[0] === "") {
    return 0;
  }
  // 符号付き32bit整数以上となる値は、符号付き32bitの最大数あるいは最小値を返す
  if (Math.abs(ans) > Math.pow(2, 31) - 1) {
    return ans > 0 ? Math.pow(2, 31) - 1 : Math.pow(-2, 31);
  } else {
    return ans;
  }
};
