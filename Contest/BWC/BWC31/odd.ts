function countOdds(low: number, high: number): number {
  let cnt = 0;
  for (let index = low; index <= high; index++) {
    if (index % 2 === 1) {
      cnt++;
    }
  }
  return cnt;
}
