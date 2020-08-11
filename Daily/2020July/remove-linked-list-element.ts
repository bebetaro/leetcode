class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head === null) {
    return null;
  }
  let dummy: ListNode = new ListNode(Infinity, null);
  const ans = dummy;
  while (head !== null) {
    if (head.val !== val) {
      dummy.next = head;
      dummy = dummy.next;
      dummy.next = null;
    } else {
      dummy.next = null;
    }
    head = head.next;
  }
  return ans.next;
}
