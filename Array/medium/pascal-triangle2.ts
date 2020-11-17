function getRow(rowIndex: number): number[] {
  let arr: number[] = [1];
  for (let index = 1; index <= rowIndex; index++) {
    const temp: number[] = [];
    for (let index = 1; index < arr.length; index++) {
      const num = arr[index] + arr[index - 1];
      temp.push(num);
    }
    arr = [1, ...temp, 1];
  }
  return arr;
}
