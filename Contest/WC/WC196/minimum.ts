function minInteger(num: string, k: number): string {
  const nums = num.split("").map(Number);
  for (let index = 0; index < k; index++) {
    const sample = Math.min(...nums.slice(index + 1, nums.length));
    if (sample < nums[index]) {
      const idx = nums.indexOf(sample);
      let temp = nums[index];
      nums[index] = sample;
      nums[idx] = temp;
    } else {
      break;
    }
  }
  return nums.join("");
}
