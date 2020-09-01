function fizzBuzz(n: number): string[] {
  const res = [];
  for (let index = 1; index <= n; index++) {
    if (index % 15 === 0) {
      res.push("FizzBuzz");
    } else if (index % 5 === 0) {
      res.push("Buzz");
    } else if (index % 3 === 0) {
      res.push("Fizz");
    } else {
      res.push(`${index}`);
    }
  }
  return res;
}
