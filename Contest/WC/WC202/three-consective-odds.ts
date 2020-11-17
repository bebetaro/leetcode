function threeConsecutiveOdds(arr: number[]): boolean {
  let cnt = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      cnt = 0;
    } else {
      cnt++;
      if (cnt === 3) {
        return true;
      }
    }
  }
  return false;
}
