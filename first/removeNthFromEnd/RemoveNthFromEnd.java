package removeNthFromEnd; /**
  19. 删除链表的倒数第 N 个结点
  给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

  进阶：你能尝试使用一趟扫描实现吗？
 */

import MainClass.ListNode;

/**
  解题方法：快慢指针。定义两个指针指向head。由于要删掉末尾第n个元素，一开始fast先向右走n + 1个位置，领先slow两个元素。双指针一起往后走，直到fast走到末尾，slow的下一个元素就是要删除的元素。
  可以画图理解。
 */
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
public class RemoveNthFromEnd {
  public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode pre = new ListNode(0);
    pre.next = head;
    ListNode slow = pre;
    ListNode fast = pre;
    for (int i = 0; i <= n; i++) {
      fast = fast.next;
    }
    while (fast != null) {
      slow = slow.next;
      fast = fast.next;
    }
    ListNode deleteNode = slow.next;
    slow.next = deleteNode.next;
    deleteNode.next = null;
    return pre.next;
  }
}
