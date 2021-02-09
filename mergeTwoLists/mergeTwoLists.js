/**
  21. 合并两个有序链表
  将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1 || l1.val === undefined) {
    return l2;
  }
  if (!l2 || !l2.val === undefined) {
    return l1;
  }
  let h1 = l1;
  let h2 = l2;
  let l = new ListNode(0);
  let head = null;
  while (h1 !== null && h2 !== null) {
    if (!head) {
      head = l;
    }
    if (h1.val < h2.val) {
      l.next = h1;
      l = l.next;
      h1 = h1.next;
    } else {
      l.next = h2;
      l = l.next;
      h2 = h2.next;
    }
  }
  while (h1 !== null) {
    l.next = h1;
    l = l.next;
    h1 = h1.next;
  }
  while (h2 !== null) {
    l.next = h2;
    l = l.next;
    h2 = h2.next;
  }
  return head.next;
};


function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

// const a2 = new ListNode(4);
// const a1 = new ListNode(2, a2);
// const list1 = new ListNode(1, a1);

// const b2 = new ListNode(4);
// const b1 = new ListNode(3, b2);
// const list2 = new ListNode(1, b1);

let mergeList = mergeTwoLists(list1, list2);
while (mergeList !== null) {
  console.log(mergeList.val);
  mergeList = mergeList.next;
}
