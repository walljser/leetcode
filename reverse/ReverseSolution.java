/**
  给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。

  如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

  假设环境不允许存储 64 位整数（有符号或无符号）。
 */
package reverse;

public class ReverseSolution {
  public int reverse(int x) {
    int n = 0;
    while (x != 0) {
      int temp = n;
      n = n * 10 + x % 10;
      x = x / 10;
      if (n / 10 != temp) {
        // 倒回来计算，与之前保存的结果不同，说明移除
        return 0;
      }
    }
    return (int)n == n ? (int)n : 0;
  }
}
