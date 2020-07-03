class Solution {
  private nums: number[];
  private original: number[];
  constructor(nums: number[]) {
    this.nums = nums;
    this.original = [...nums];
  }

  reset(): number[] {
    this.nums = this.original;
    this.original = [...this.original];
    return this.nums;
  }

  shuffle(): number[] {
    for (let index = 0; index < this.nums.length; index++) {
      let temp = 0;
      const element = Math.floor(Math.random() * (this.nums.length - 1));
      temp = this.nums[element];
      this.nums[element] = this.nums[index];
      this.nums[index] = temp;
    }
    return this.nums;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
