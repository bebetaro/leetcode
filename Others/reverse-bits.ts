/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  const temp = n.toString(2);
  const preBits = "0".repeat(32 - temp.length) + temp;
  const bits = preBits.split("").reverse().join("");
  return Number.parseInt(bits, 2);
};
