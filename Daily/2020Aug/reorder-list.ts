class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify head in-place instead.
*/
function reorderList(head: ListNode | null): void {
  let arr: number[] = [];
  let copy = head;
  while (copy !== null) {
    arr.push(copy.val);
    copy = copy.next;
  }
  const len = arr.length % 2;
  arr = arr.slice(Math.floor(arr.length / 2));
  let index = 1;
  while (true) {
    const last = arr[arr.length - index];
    if (head === null || head.next === null) break;
    const temp = head.next;
    head.next = new ListNode(last, temp);
    if (index === arr.length) {
      if (len === 0) {
        head = head.next;
      }
      head.next = null;
      break;
    } else {
      head = head.next;
      head.next = temp;
      head = head.next;
      index++;
    }
  }
}
