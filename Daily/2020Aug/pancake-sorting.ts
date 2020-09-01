function pancakeSort(A: number[]): number[] {
  const res = [];
  for (let index = A.length; index > 0; index--) {
    const num = A.indexOf(index);
    if (num === index - 1) continue;
    if (num !== 0) {
      res.push(num + 1);
      A = flip(A, num + 1);
    }
    res.push(index);
    A = flip(A, index);
  }
  return res;
}

const flip = (arr: number[], target: number): number[] => {
  const part = arr.splice(0, target).reverse();
  return [...part, ...arr];
};
