class Linked {
  val: number | null;
  next: Linked | null;
  constructor(val: number | null, next: Linked | null) {
    this.val = val;
    this.next = next;
  }
}

class MinStack {
  private internal: Linked | null;
  constructor() {
    this.internal = new Linked(null, null);
  }

  push(x: number): void {
    const temp = this.internal;
    this.internal = new Linked(x, temp);
  }

  pop(): void {
    if (this.internal && this.internal.next !== null) {
      this.internal = this.internal.next;
    }
  }

  top(): number {
    if (this.internal !== null && this.internal.val !== null) {
      return this.internal.val;
    }
    return Infinity;
  }

  getMin(): number {
    if (this.internal === null || this.internal.val === null) {
      return Infinity;
    }
    const temp = this.internal;
    let minVal = this.internal.val;
    while (true) {
      if (this.internal.val !== null && minVal > this.internal.val) {
        minVal = this.internal.val;
      }
      if (this.internal.next === null) {
        break;
      }
      this.internal = this.internal.next;
    }
    this.internal = temp;
    return minVal;
  }
}

// class MinStack {
//   private internal: number[] = [];
//   constructor() {
//     this.internal;
//   }

//   push(x: number): void {
//     this.internal.push(x);
//   }

//   pop(): void {
//     this.internal.pop();
//   }

//   top(): number {
//     const len = this.internal.length;
//     return this.internal[len - 1];
//   }

//   getMin(): number {
//     return Math.min(...this.internal);
//   }
// }

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
