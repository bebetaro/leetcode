function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length < 2) {
    return 0;
  }
  intervals.sort((a, b) => a[1] - b[1]);
  let res = 0;
  let last = intervals[0][1];
  for (let index = 1; index < intervals.length; index++) {
    if (intervals[index][0] < last) {
      res++;
    } else {
      last = intervals[index][1];
    }
  }
  return res;
}
// let temp: number[][] = [intervals[0]];
// const first = intervals[index][0];
// const last = intervals[index][1];
// let over = false;
// for (let j = 0; j < temp.length; j++) {
//   const item = temp[j];
//   if (
//     (item[1] > first && last >= item[1]) ||
//     (item[0] >= first && last > item[0]) ||
//     (item[0] >= first && last >= item[1])
//   ) {
//     over = true;
//   }
// }
// if (over) {
//   res++;
// } else {
//   temp.push(intervals[index]);
// }
