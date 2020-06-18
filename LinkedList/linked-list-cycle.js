/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null) {
    return false;
  }
  const map = new Map();
  while (true) {
    if (head.next === null) {
      return false;
    }
    const node = `{${head.val}:${head.next.val}}`;
    if (map.has(node)) {
      return true;
    }

    map.set(node);
    head = head.next;
  }
};
