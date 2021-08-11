function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var swapPairs = function(head) {
//   if (head && !head.next) {
//     return head;
//   }
//   let dummyHead = new ListNode(0);
//   let prev = dummyHead;
//   let cur = head;
//   while (cur && cur.next) {
//     const next = cur.next;
//     prev.next = next;
//     cur.next = next.next;
//     next.next = cur;
//     prev = cur;
//     cur = cur.next;
//   }
//   return dummyHead.next;
// };

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }
  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
};

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
n1.next = n2;
n2.next = n3;
n3.next = n4;

function print(head) {
  let cur = head;
  let str = ''
  while (cur) {
    str += cur.val + ' '
    cur = cur.next;
  }
  console.log(str);
}

print(n1);

const newN1 = swapPairs(n1);

print(newN1);
