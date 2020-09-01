function isPowerOfFour(num: number): boolean {
  const bits = num.toString(2);
  if (bits.length % 2 === 1 && bits[0] === "1") {
    return bits.replace(/0/g, "").length === 1;
  } else {
    return false;
  }
}
