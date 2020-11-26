class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getDecimalValue(head: ListNode | null): number {
  const binary = returnBinary(head, "");
  return parseInt(binary, 2);
}

const returnBinary = (head: ListNode | null, res: string): string => {
  if (head === null) {
    return res;
  }
  return returnBinary(head.next, `${res}${head.val}`);
};
