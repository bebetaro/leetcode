function generate(numRows: number): number[][] {
  if (numRows === 0) {
    return [];
  }
  const arr = [[1]];
  for (let index = 0; index < numRows - 1; index++) {
    const lastArr = arr[arr.length - 1];
    const temp = [];
    for (let j = 0; j < lastArr.length + 1; j++) {
      if (j === 0 || j === lastArr.length) {
        temp.push(1);
      } else {
        const num = lastArr[j] + lastArr[j - 1];
        temp.push(num);
      }
    }
    arr.push(temp);
  }
  return arr;
}
