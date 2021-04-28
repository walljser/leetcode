function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

// /**
//  * @param {ListNode[]} lists
//  * @return {ListNode}
//  */
// var mergeKLists = function(lists) {
//   if (!lists || lists.length === 0) {
//     return null;
//   }
//   const n = lists.length;
//   let cur = lists[0];
//   const head = new ListNode(0);
//   let tail = head;
//   while (true) {
//     let minNode = null;
//     let minPointer = -1;
//     for (let i = 0; i < n; i++) {
//       if (!lists[i]) {
//         continue
//       }
//       if (!minNode || lists[i].val < minNode.val) {
//         minNode = lists[i];
//         minPointer = i;
//       }
//     }
//     if (minPointer < 0) {
//       break;
//     }
//     tail.next = minNode;
//     tail = tail.next;
//     lists[minPointer] = lists[minPointer].next;
//   }
//   return head.next;
// }

// ===

// const mergeTwoList = function(l1, l2) {
//   const head = new ListNode(0);
//   let tail = head;
//   while (l1 && l2) {
//     if (l1.val < l2.val) {
//       tail.next = l1;
//       l1 = l1.next;
//     } else {
//       tail.next = l2;
//       l2 = l2.next;
//     }
//     tail = tail.next;
//   }
//   tail.next = l1 ? l1 : l2;
//   return head.next;
// }

// var mergeKLists = function (lists) {
//   let res = lists[0] || null;
//   for (let i = 1; i < lists.length; i++) {
//     res = mergeTwoList(res, lists[i]);
//   }
//   return res;
// }

// ===

