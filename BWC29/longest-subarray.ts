function longestSubarray(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  const str = nums.join("").match(/1+|0+/g);
  if (str === null) {
    return 0;
  }
  if (str.length === 1) {
    if (str[0].includes("0")) {
      return 0;
    } else {
      return nums.length - 1;
    }
  }

  let longest = 0;
  str.forEach((item) => {
    if (item.includes("1") && item.length > longest) {
      longest = item.length;
    }
  });
  for (let index = 0; index < str.length; index++) {
    if (str[index].includes("0") && str[index].length === 1) {
      if (index === 0 || index === str.length - 1) {
        continue;
      }
      const combined = str[index - 1] + str[index + 1];
      if (combined.length > longest) {
        longest = combined.length;
      }
    }
  }
  return longest;
}
