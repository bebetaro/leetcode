/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const arr = str.split(" ");
  for (const i of arr) {
    if (i !== "" && Number(i) !== NaN) {
      str = i;
      break;
    }
  }

  if (!/\d/.test(str)) {
    return 0;
  }
  const non = str.match(/\S/g).join("");
  if (/^\D(?=\D)/.test(non)) {
    return 0;
  }

  const num = non.match(/-|\+|\.|\d*/g);

  let ans = "";

  for (let index = 0; index < num.length; index++) {
    if (num[index] === "") {
      break;
    } else if (index !== 0 && (num[index] === "-" || num[index] === "+")) {
      break;
    }
    ans += num[index];
  }

  if (ans > Math.pow(2, 31) - 1 || Math.pow(-2, 31) > ans) {
    return ans > 0 ? Math.pow(2, 31) - 1 : Math.pow(-2, 31);
  } else {
    return ans;
  }
};
