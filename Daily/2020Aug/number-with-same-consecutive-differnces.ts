function numsSameConsecDiff(N: number, K: number): number[] {
  const res = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (N === 1) {
    return res;
  }

  res.shift();
  const ans: number[] = [];
  for (let i = 0; i < res.length; i++) {
    const first = res[i].toString();
    let temp: string[] = [first];
    for (let j = 1; j < N; j++) {
      const tempCopy = [];
      for (let k = 0; k < temp.length; k++) {
        const last = Number(temp[k][temp[k].length - 1]);
        if (last + K >= 0 && 9 >= last + K) {
          tempCopy.push(`${temp[k]}${last + K}`);
        }
        if (last - K >= 0 && 9 >= last - K) {
          tempCopy.push(`${temp[k]}${last - K}`);
        }
        if (last + K === last - K) {
          tempCopy.pop();
        }
      }
      temp = tempCopy;
    }
    temp.forEach((item) => {
      ans.push(Number(item));
    });
  }
  return ans;
}
