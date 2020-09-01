function findRightInterval(intervals: number[][]): number[] {
  const map = new Map<number, number>();
  for (let index = 0; index < intervals.length; index++) {
    map.set(intervals[index][0], index);
  }
  const keys = [...map.keys()].sort((a, b) => a - b);
  const res: number[] = [];

  for (let index = 0; index < intervals.length; index++) {
    const num = intervals[index][1];
    if (num > keys[keys.length - 1]) {
      res.push(-1);
    } else {
      // @ts-ignore
      const i = map.get(keys[binarySearch(keys, num)]);
      res.push(i);
    }
  }
  return res;
}

const binarySearch = (arr: number[], target: number) => {
  let high = arr.length - 1;
  let low = 0;
  while (low < high) {
    const mid = Math.floor((high + low) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] > target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return high;
};
