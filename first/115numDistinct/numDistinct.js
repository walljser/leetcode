// 115. 不同的子序列
// 给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。

// 字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

// 题目数据保证答案符合 32 位带符号整数范围。

var numDistinct = function(s, t) {
  const sLen = s.length;
  const tLen = t.length;
  const dp = new Array(tLen + 1);
  dp[0] = [];
  for (let i = 0; i <= sLen; i++) {
    if (!dp[0]) {
      dp[0] = [];
    }
    dp[0][i] = 1;
  }
  for (let i = 1; i <= tLen; i++) {
    dp[i] = [0];
  }
  for (let i = 1; i <= tLen; i++) {
    for (let j = 1; j <= sLen; j++) {
      if (t[i - 1] === s[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  return dp[tLen][sLen];
};

console.log(numDistinct('babgbag', 'bag'))
