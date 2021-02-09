package MainClass;

import LongestPalindrome.LongestPalindrome;
import findMedianSortedArrays.FindMediaSortedArrays;
import lengthOfLongestSubstring.LengthOfLongestSubstring;
import merge.MergeSolution;
import quickSort.QuickSort;
import removeNthFromEnd.RemoveNthFromEnd;
import reverse.ReverseSolution;

import java.io.IOException;


public class MainClass {
  public static void main(String[] args) throws IOException {
    ListNode num5 = new ListNode(5);
    ListNode num4 = new ListNode(4, num5);
    ListNode num3 = new ListNode(3, num4);
    ListNode num2 = new ListNode(2, num3);
    ListNode list = new ListNode(1, num2);
    new RemoveNthFromEnd().removeNthFromEnd(list, 2);
    ListNode head = list;
    while (head != null) {
      System.out.println(head.val);
      head = head.next;
    }
  }
}
