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
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== arr[arr.length - 1 - index]) {
      return false;
    }
  }
  // 文字列で評価すると若干メモリ消費が多くなる
  // if (arr.join("") === arr.reverse().join("")) {
  //   return true;
  // } else {
  //   return false;
  // }
  return true;
};

// Solution

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

  let fast = head;
  let slow = head;
  // Slowは半分しか進んでいない = 後半部分の最初のNodeである
  while (fast && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let prev = null;
  while (slow) {
    // 次のSlowを退避させる
    const next = slow.next;
    // prevは初期値でnullで、ここにslowの値を入れていく
    // slow.next = prev前回のslowの値がここに蓄積されていく
    // 結果として最終的にprevには後半の逆転した値が入っている
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  let p1 = head;
  let p2 = prev;
  while (p2 !== null) {
    if (p1.val !== p2.val) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
};
