function hIndex(citations: number[]): number {
  citations.sort((a, b) => a - b);
  for (let index = 0; index < citations.length; index++) {
    const num = index + 1;
    const cite = citations[citations.length - 1 - index];
    if (num === cite) {
      return num;
    } else if (num > cite) {
      return num - 1;
    }
  }
  return citations.length;
}
