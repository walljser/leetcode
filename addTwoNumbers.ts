/**
 * 这题主要是要读懂题目的意思，遍历两个链表，数字相加，记得进位。读完的链表，数值设为0进行相加就好
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const root: ListNode = new ListNode(0);
  let cursor: ListNode = root;
  let carry: number = 0;
  while (l1 || l2 || carry !== 0) {
    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;
    const sum = l1Val + l2Val + carry;
    carry = Math.floor(sum / 10);

    const sumNode: ListNode = new ListNode(sum % 10);
    cursor.next = sumNode;
    cursor = cursor.next;

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  return root.next
}

let l1Root = new ListNode(2);
let l1: ListNode = l1Root;
l1.next = new ListNode(4);
l1 = l1.next;
l1.next = new ListNode(3);

let l2Root = new ListNode(5);
let l2: ListNode = l2Root;
l2.next = new ListNode(6);
l2= l2.next;
l2.next = new ListNode(4);

function printListNode(list: ListNode) {
  console.log('开始打印');
  while (list) {
    console.log(list.val);
    list = list.next;
  }
}

printListNode(l1Root);
printListNode(l2Root);
const newList: ListNode = addTwoNumbers(l1Root, l2Root);
printListNode(newList);
