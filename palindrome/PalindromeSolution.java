/**
 * 解题思路，直接翻转整个数组没有必要，还有可能溢出
 * 只需要翻转数字的后半部分，再跟前半部分对比是否一样就可以，奇数和偶数就差1位，最后加一个判断即可。
 */

public class PalindromeSolution {
  public boolean isPalindrome(int x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) {
      return false;
    }
    int rx = 0;
    while (x > rx) {
      rx = rx * 10 + x % 10;
      x = x / 10;
    }
    return x == rx || x == (rx / 10);
  }
}
