function canArrange(arr: number[], k: number): boolean {
  if (arr.length === 0) {
    return false;
  }
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    const nums = arr.lastIndexOf((item) => (item + arr[i]) % k === 0);
    if (nums.length > 0) {
      const num = Math.max(...nums);
      arr[i] = Infinity;
      const index = arr.find((item) => item === num) || Infinity;
      arr[index] = Infinity;
    }
  }

  const checked = arr.filter((item) => item !== Infinity);
  if (checked.length === 0) {
    return true;
  } else {
    return false;
  }
}
