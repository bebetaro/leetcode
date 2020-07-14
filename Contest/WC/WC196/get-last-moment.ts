function getLastMoment(n: number, left: number[], right: number[]): number {
  if (left.length === 0) {
    return n - Math.min(...right);
  }
  if (right.length === 0) {
    return Math.max(...left);
  }

  const maxLeft = Math.max(...left);
  const maxRight = n - Math.min(...right);
  return Math.max(maxLeft, maxRight);
}
