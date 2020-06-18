/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null) {
    return true;
  }
  const arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }

  const reversed = arr.reverse();
  if (arr.join("") === reversed.join("")) {
    return true;
  } else {
    return false;
  }
};
