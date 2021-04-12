/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  const dummyHead = new ListNode();
  dummyHead.next = head;

  let g = dummyHead;
  let p = dummyHead.next;

  for (let i = 0; i < left - 1; i++) {
    g = g.next;
    p = p.next;
  }

  for (let i = 0; i < right - left; i++) {
    const removed = p.next;

    p.next = p.next.next;

    removed.next = g.next;
    g.next = removed;
  }

  return dummyHead.next;
};
