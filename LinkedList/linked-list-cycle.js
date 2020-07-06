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
    if (map.has(head)) {
      return true;
    }

    map.set(head);
    head = head.next;
  }
};

// Two Pointer

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
  if (head == null || head.next === null) return false;
  let slow = head;
  let fast = head.next;

  while (slow != fast) {
    if (fast == null || fast.next === null) {
      return false;
    }
    fast = fast.next.next;
    slow = slow.next;
  }

  return true;
};
