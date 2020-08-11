function addDigits(num: number): number {
  if (num < 10) {
    return num;
  } else {
    const sum = String(num)
      .split("")
      .map(Number)
      .reduce((pre, cur) => pre + cur);

    return addDigits(sum);
  }
}
