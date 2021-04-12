/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// let left;

// var traverse = function (right) {
//   if (!right) {
//     return true;
//   }
//   const res = traverse(right.next);
//   const isPalindrome = res && right.val === left.val;
//   left = left.next;
//   return isPalindrome;
// }

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// var isPalindrome = function(head) {
//   left = head;
//   return traverse(head);
// };


// var isPalindrome = function(head) {
//   if (!head) {
//     return true;
//   }
//   const list = [];
//   while (head) {
//     list.push(head.val);
//     head = head.next;
//   }
//   for (let i = 0, j = list.length - 1; i < j; i++, j--) {
//     if (list[i] !== list[j]) {
//       return false;
//     }
//   }
//   return true;
// }

const reverseList = function (head) {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev
}

const endOfFirstHalf = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next && fast.next.next && slow && slow.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

var isPalindrome = function (head) {
  if (!head) {
    return true;
  }
  const half = endOfFirstHalf(head);
  const secondHalfStart = reverseList(half.next);

  let p1 = head;
  let p2 = secondHalfStart;
  let result = true;
  while (result && p2) {
    if (p1.val !== p2.val) {
      result = false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  half.next = reverseList(secondHalfStart);
  return result;
}
