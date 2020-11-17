class CombinationIterator {
  private arr: string[] = [];
  constructor(characters: string, combinationLength: number) {
    const bits = "1".repeat(characters.length);
    for (let index = 0; index <= Number.parseInt(bits, 2); index++) {
      let word = "";
      const bit =
        "0".repeat(characters.length - index.toString(2).length) +
        index.toString(2);
      for (let j = 0; j < bit.length; j++) {
        if (bit[j] === "1") {
          word += word + characters[j];
        }
      }
      if (word.length === combinationLength) {
        this.arr.push(word);
      }
    }
  }

  next(): string {
    // @ts-ignore
    return this.arr.pop();
  }

  hasNext(): boolean {
    return this.arr.length === 0 ? false : true;
  }
}

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
