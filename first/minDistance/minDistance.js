/**
 * leetcode
  72. 编辑距离
  给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

  你可以对一个单词进行如下三种操作：

  插入一个字符
  删除一个字符
  替换一个字符
 */

/**
 * 解题：动态规划
 * 设dp[i][j]为将 w1,w2,w3...wi 转换成 y1,y2,y3...yj 的最小编辑距离。
 * diff[i][j]为将wi转为yj所需要的编辑距离，0或1
 * 我们增加一位dp[0][0]代表将'' 转换为 '' 所需要的编辑距离，为0
 * 画图可以理解，dp[i][j] = min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + diff[i][j]
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  if (word1 === word2) {
    return 0
  }
  const len1 = word1.length;
  const len2 = word2.length;
  const dp = [];
  for (let i = 0; i <= len1; i++) {
    dp[i] = [];
  }
  for (let i = 0; i <= len1; i++) {
    for (let j = 0; j <= len2; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 0;
      } else if (i === 0 && j !== 0) {
        const diff = 1;
        dp[i][j] = dp[i][j - 1] + diff;
      } else if (j === 0 && i !== 0) {
        const diff = 1;
        dp[i][j] = dp[i - 1][j] + diff;
      } else {
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          // const diff = word1[i - 1] === word2[j - 1] ? 0 : 1;
          const min = Math.min(dp[i - 1][j - 1], Math.min(dp[i][j - 1], dp[i - 1][j]));
          dp[i][j] = min + 1;
        }
      }
    }
  }
  return dp[len1][len2];
};

// console.log(minDistance('horse', 'ros'));
// console.log(minDistance('intention', 'execution'));
console.log(minDistance('zoologicoarchaeologist', 'zoogeologist'));
