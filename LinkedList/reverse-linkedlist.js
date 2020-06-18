/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null) {
    return head;
  }
  const arr = [];
  while (head.next !== null) {
    arr.push(head);
    head = head.next;
  }
  arr.push(head);
  arr.reverse();
  for (let index = 0; index < arr.length; index++) {
    head.next = arr[index + 1];
    head = head.next;
  }
  return arr[0];
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  if (head == null || head.next == null) return head;
  // pには最後のnodeが入っている
  const p = reverseList(head.next);
  // このノードの次のノードのnextに差し込む
  //イメージとしては、[1,2,3]を[3,2,1]と逆転するのではなく、
  // 2の次は3、3の次に2を差し込む、1の次は2で2の次に1を差し込む処理が以下
  head.next.next = head;
  head.next = null;
  return p;
};
