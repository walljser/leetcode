/**
  10. 正则表达式匹配
  给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

  '.' 匹配任意单个字符
  '*' 匹配零个或多个前面的那一个元素
  所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

  示例 1：
  输入：s = "aa" p = "a"
  输出：false
  解释："a" 无法匹配 "aa" 整个字符串。

  示例 2:
  输入：s = "aa" p = "a*"
  输出：true
  解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。

  示例 3：
  输入：s = "ab" p = ".*"
  输出：true
  解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。

  示例 4：
  输入：s = "aab" p = "c*a*b"
  输出：true
  解释：因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。

  示例 5：
  输入：s = "mississippi" p = "mis*is*p*."
  输出：false
 */

/**
 * 动态规划阶梯。 dp[i][j]表示s的第i个数与p的第j个数是否匹配。
 * 这里注意一点，dp最前方加一位，默认dp[0][0]为true，代表'' == ''.  整个遍历从1开始。
 * 如果p[j -1]是'*'，那么，p的上一位与s[i]是否相等
 *
 */
var isMatch = function(s, p) {
  const dp = [];
  const sLen = s.length, pLen = p.length;
  for (let i = 0; i < sLen + 1; i++) {
    dp[i] = new Array(pLen + 1).fill(false);
  }
  dp[0][0] = true;
  for (let j = 0; j < pLen + 1; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }
  for (let i = 1; i < sLen + 1; i++) {
    for (j = 1; j < pLen + 1; j++) {
      if (s[i - 1] === p[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          // 让p[j - 2]重复0次： dp[i][j] = dp[i][j - 2]
          dp[i][j] = dp[i - 1][j] || dp[i][j - 1] || dp[i][j - 2]
        } else {
          // *当成没有处理
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }
  return dp[sLen][pLen];
};

// console.log(isMatch('aa', 'a'));
// console.log(isMatch('aa', 'a*'));
// console.log(isMatch('ab', '.*'));
console.log(isMatch('aab', 'c*a*b'));
// console.log(isMatch('aab', 'c*a*b'));
