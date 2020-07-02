/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head.next === null) {
    head = null;
    return head;
  }
  removeNode(head, n);
  return head;
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const removeNode = (head, n) => {
  if (n === 1 && head.next.next === null) {
    head.next = null;
    return;
  }
  if (findNode(head, n - 1)) {
    if (head.next) {
      head.val = head.next.val;
      head.next = head.next.next;
    }
    return;
  }
  return removeNode(head.next, n);
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {boolean}
 */
const findNode = (head, n) => {
  if (n === 0) {
    return head.next === null ? true : false;
  }
  return findNode(head.next, n - 1);
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  const dummy = {};
  dummy.next = head;
  let length = 0;
  let first = head;
  while (first != null) {
    length++;
    first = first.next;
  }
  // 全体の長さからn分だけ差し引く
  length -= n;
  // firstにdummyを入れる
  first = dummy;
  while (length > 0) {
    length--;
    // dummyからスタートするので除去すべき値の一つ前まで進める
    first = first.next;
  }
  // first.nextで除去すべきNodeにその次のNodeを差し込んでいる
  first.next = first.next.next;
  // 一番最初のNodeを返す
  return dummy.next;
};
