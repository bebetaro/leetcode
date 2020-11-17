function largestTimeFromDigits(A: number[]): string {
  A.sort((a, b) => a - b);
  const filtered = A.filter((item) => item > 5);

  let first = -1;
  const res = [-1, -1, -1, -1];
  let isTwo = false;
  for (let index = 0; index < A.length; index++) {
    if (filtered.length > 1) {
      if (A[index] < 2) {
        if (A[index] > first) {
          first = A[index];
          res[0] = index;
        }
      }
    } else {
      if (A[index] < 3) {
        if (A[index] > first) {
          first = A[index];
          res[0] = index;
        }
        if (A[index] === 2) {
          isTwo = true;
        }
      }
    }
  }
  let second = -1;
  for (let index = 0; index < A.length; index++) {
    if (index === res[0]) continue;
    if (isTwo) {
      if (A[index] < 4 && A[index] > second) {
        second = A[index];
        res[1] = index;
      }
    } else {
      if (A[index] > second) {
        second = A[index];
        res[1] = index;
      }
    }
  }
  let third = -1;
  for (let index = 0; index < A.length; index++) {
    if (index === res[0] || index === res[1]) continue;
    if (A[index] < 6 && A[index] > third) {
      third = A[index];
      res[2] = index;
    }
  }

  for (let index = 0; index < A.length; index++) {
    if (index === res[0] || index === res[1] || index === res[2]) continue;
    res[3] = index;
  }

  if (res.includes(-1)) {
    return "";
  } else {
    return `${A[res[0]]}${A[res[1]]}:${A[res[2]]}${A[res[3]]}`;
  }
}
