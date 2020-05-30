/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  if (digits.length > 15)
    return (BigInt(digits.join("")) + 1n).toString().split("");
  return (parseInt(digits.join("")) + 1).toString().split("");
};
