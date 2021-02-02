package MainClass;

import LongestPalindrome.LongestPalindrome;
import lengthOfLongestSubstring.LengthOfLongestSubstring;
import reverse.ReverseSolution;

import java.io.IOException;


public class MainClass {
  public static void main(String[] args) throws IOException {
    System.out.println(new LongestPalindrome().longestPalindrome("babad"));
    System.out.println(new LongestPalindrome().longestPalindrome("cbbd"));
    System.out.println(new LongestPalindrome().longestPalindrome("a"));
    System.out.println(new LongestPalindrome().longestPalindrome("ac"));
  }
}
