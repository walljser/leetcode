import lengthOfLongestSubstring.LengthOfLongestSubstring;

import java.io.IOException;

public class MainClass {
  public static void main(String[] args) throws IOException {
    String s = "abcabcbb";
    int length = new LengthOfLongestSubstring().lengthOfLongestSubstring(s);
    System.out.println(length);
  }
}
