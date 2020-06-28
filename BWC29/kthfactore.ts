function kthFactor(n: number, k: number): number {
  const mid = Math.floor(n / 2);
  let arr = [];
  for (let index = 1; index < mid + 1; index++) {
    if (n % index === 0) {
      arr.push(index);
    }
  }
  arr.push(n);
  if (arr.length >= k) {
    return arr[k - 1];
  } else {
    return -1;
  }
}
