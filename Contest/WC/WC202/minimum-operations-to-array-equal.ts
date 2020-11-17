function minOperations(n: number): number {
  const arr = [];
  for (let index = 0; index < n; index++) {
    const num = index * 2 + 1;
    arr.push(num);
  }

  console.log(arr);
  if (arr.length % 2 === 1) {
    const mid = Math.floor(arr.length / 2);
    const len = arr.slice(0, mid).length;
    let cnt = 0;
    for (let index = 1; index <= len; index++) {
      cnt += index * 2;
    }
    return cnt;
  } else {
    // const ave = arr.reduce((pre, cur) => pre + cur) / arr.length;
    const mid = Math.floor(arr.length / 2);
    const len = arr.slice(0, mid).length;
    let cnt = 0;
    for (let index = 0; index < len; index++) {
      cnt += index * 2 + 1;
    }
    return cnt;
  }
}
