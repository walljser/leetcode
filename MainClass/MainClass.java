package MainClass;

import LongestPalindrome.LongestPalindrome;
import findMedianSortedArrays.FindMediaSortedArrays;
import lengthOfLongestSubstring.LengthOfLongestSubstring;
import merge.MergeSolution;
import quickSort.QuickSort;
import reverse.ReverseSolution;

import java.io.IOException;


public class MainClass {
  public static void main(String[] args) throws IOException {
//    int[] nums1 = {1,2};
//    int[] nums2 = {3,4};
//    System.out.println(new FindMediaSortedArrays().findMediaSortedArrays(nums1, nums2));
    int[] nums = {42, 15, 20, 6, 8, 38, 50, 12};
    new QuickSort().quickSort(nums, 0, nums.length - 1);
    for (int num: nums) {
      System.out.println(num);
    }
  }
}
