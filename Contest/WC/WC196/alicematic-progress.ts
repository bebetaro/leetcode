function canMakeArithmeticProgression(arr: number[]): boolean {
  if (arr.length < 2) {
    return false;
  }
  arr.sort((a, b) => a - b);
  const diff = arr[1] - arr[0];

  for (let index = 1; index < arr.length; index++) {
    if (arr[index] - arr[index - 1] !== diff) {
      return false;
    }
  }
  return true;
}
