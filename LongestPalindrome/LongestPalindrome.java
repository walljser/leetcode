package LongestPalindrome;

public class LongestPalindrome {
  /**
  * 暴力解法
  */
  public String longestPalindrome(String s) {
    int length = s.length();
    if (length < 2) {
      return s;
    }

    int maxLen = 1; // 保存最长回文串长度
    int begin = 0; // 保存起始w位置
    char[] charArray = s.toCharArray();
    for (int i = 0; i < length - 1; i++) { // 从 0 开始遍历
      for (int j = i + 1; j < length; j++) { // end从 i + 1开始遍历
        // j - i + 1是长度，如  i = 0， j = 1，长度是 1 - 0 + 1 = 2
        if (j - i + 1 > maxLen && this.validPalindromic(charArray, i, j)) {
          maxLen = j - i + 1;
          begin = i;
        }
      }
    }
    return s.substring(begin, begin + maxLen);
  }

  /**
   * 判断是否是回文串
   */
  Boolean validPalindromic(char[] charArray, int left, int right) {
    while (left < right) {
      if (charArray[left] != charArray[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}
