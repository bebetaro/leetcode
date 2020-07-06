const isPrime = (num: number): boolean => {
  const n = Math.ceil(Math.sqrt(num));
  for (let index = 2; index <= n; index++) {
    if (num !== index && num % index === 0) {
      return false;
    }
  }
  return true;
};

function countPrimes(n: number): number {
  let arr = 0;
  for (let index = 2; index <= n; index++) {
    if (isPrime(index)) {
      arr++;
    }
  }
  return arr;
}
