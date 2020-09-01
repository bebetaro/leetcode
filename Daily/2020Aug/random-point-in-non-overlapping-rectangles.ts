class Solution {
  private sums: number[] = [];
  private rects: number[][];
  constructor(rects: number[][]) {
    let total = 0;
    this.rects = rects;
    for (let index = 0; index < rects.length; index++) {
      total +=
        Math.abs(rects[index][2] - rects[index][0] + 1) *
        Math.abs(rects[index][3] - rects[index][1] + 1);
      this.sums.push(total);
    }
  }

  pick(): number[] {
    const num = Math.random() * this.sums[this.sums.length - 1];
    let index = 0;
    while (index < this.sums.length && this.sums[index] < num) {
      index++;
    }
    // let last = 0;
    // for (let i = 0; i < this.sums.length; i++) {
    //   if (num > this.sums[last] && this.sums[i] >= num) {
    //     index = i;
    //     break;
    //   } else {
    //     last = i;
    //   }
    // }
    const arr = this.rects[index];
    const x = Math.floor(Math.random() * (arr[2] - arr[0] + 1)) + arr[0];
    const y = Math.floor(Math.random() * (arr[3] - arr[1] + 1)) + arr[1];
    return [x, y];
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
