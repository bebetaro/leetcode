/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return "1";
  let ans = "1";
  for (let index = 0; index < n - 1; index++) {
    ans = generateString(ans);
  }
  return ans;
};

/**
 * @param {string} num
 * @return {string}
 */
const generateString = (num) => {
  let ans = "";
  let temp = num[0];
  for (let index = 1; index < num.length; index++) {
    if (num[index] !== num[index - 1]) {
      ans += `${temp.length}${num[index - 1]}`;
      temp = num[index];
    } else {
      temp += num[index];
    }
  }
  ans += `${temp.length}${temp[0]}`;

  return ans;
};

// 正規表現

var countAndSay = function (n) {
  if (n === 1) return "1";

  return (
    countAndSay(n - 1)
      // n <= 30まででは同じ数字が3桁以上にならないので、正規表現で配列家できる
      .match(/1+|2+|3+/g)
      // reduceで各配列の長さと値を足していっている
      .reduce((acc, nums) => (acc += `${nums.length}${nums[0]}`), "")
  );
};
