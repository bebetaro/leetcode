function isPowerOfThree(n: number): boolean {
  return Number.isInteger(Number((Math.log(n) / Math.log(3)).toFixed(12)));
}
