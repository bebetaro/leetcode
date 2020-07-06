function fizzBuzz(n: number): string[] {
  const arr = [];
  for (let index = 0; index < n; index++) {
    const num = index + 1;
    if (num % 15 === 0) {
      arr.push("FizzBuzz");
    } else if (num % 3 === 0) {
      arr.push("Fizz");
    } else if (num % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(num.toString());
    }
  }
  return arr;
}
