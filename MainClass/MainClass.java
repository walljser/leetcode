package MainClass;

import LongestPalindrome.LongestPalindrome;
import lengthOfLongestSubstring.LengthOfLongestSubstring;
import merge.MergeSolution;
import reverse.ReverseSolution;

import java.io.IOException;


public class MainClass {
  public static void main(String[] args) throws IOException {
//    int[] nums1 = {1,2,3,0,0,0};
//    int[] nums2 = {2,5,6};
    int[] nums1 = {1};
    int[] nums2 = {};
//    new MergeSolution().merge(nums1, 3, nums2, 3);
    new MergeSolution().merge(nums1, 1, nums2, 0);
    for (int num : nums1) {
      System.out.println(num);
    }
  }
}
