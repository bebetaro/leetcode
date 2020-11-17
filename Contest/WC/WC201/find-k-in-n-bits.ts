function findKthBit(n: number, k: number): string {
  let index = n - 1;
  let first = "0";
  while (index > 0) {
    let bits = "";
    for (let index = 0; index < first.length; index++) {
      if (first[index] === "0") {
        bits += "1";
      } else {
        bits += "0";
      }
    }
    first = first + "1" + bits.split("").reverse().join("");
    index--;
  }
  return first[k - 1];
}
