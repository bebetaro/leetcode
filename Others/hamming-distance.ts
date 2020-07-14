function hammingDistance(x: number, y: number): number {
  const merged = (x ^ y).toString(2).replace(/0+/g, "");
  return merged.length;
}
