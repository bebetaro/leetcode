function getWinner(arr: number[], k: number): number {
  if (arr.length === 2) return Math.max(arr[0], arr[1]);
  if (k > arr.length) return Math.max(...arr);
  if (Math.max(...arr.slice(0, k + 1)) === arr[0]) return arr[0];
  let index = 1;
  while (index + k > arr.length) {
    const max = Math.max(...arr.slice(index - 1, index + k));
    if (max === arr[index]) {
      return arr[index];
    } else {
      index = arr.indexOf(max);
    }
  }
  return Math.max(...arr);
}
