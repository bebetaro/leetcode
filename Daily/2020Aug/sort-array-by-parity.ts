function sortArrayByParity(A: number[]): number[] {
  const even = [];
  const odd = [];
  for (let index = 0; index < A.length; index++) {
    if (A[index] % 2 === 0) {
      even.push(A[index]);
    } else {
      odd.push(A[index]);
    }
  }
  return [...even, ...odd];
}
