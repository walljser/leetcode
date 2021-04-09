// 迭代
// var reverseList = function(head) {
//   let pre = null;
//   let current = head;
//   while (current) {
//     const next = current.next;
//     current.next = pre;
//     pre = current;
//     current = next;
//   }
//   return pre;
// };

var reverseList = function(head) {
  if (!head || !head.next) {
    return head;
  }
  const last = reverseList(head);
  head.next.next = head;
  head.next = null;
  return last;
}
