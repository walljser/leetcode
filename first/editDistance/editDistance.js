/**
 * 编辑距离
 * 求将word1转成word2需要的编辑距离
 * 1. 插入
 * 2. 删除
 * 3. 替换
 * 例如：将FAMILY转成FRAME的编辑距离
 */

var editDistance = function (s1, s2) {
  if (s1 === s2) {
    return 0;
  }
  const len1 = s1.length;
  const len2 = s2.length;
  const dp = [], diff = [];
  for (let i = 0; i <= len1; i++) {
    if (i === 0) {
      dp[i] = [0]
    } else {
      dp[i] = [i];
    }
  }
  for (let j = 1; j <= len2; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s1[i - 1] === s1[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1])) + 1;
      }
    }
  }
  return dp[len1][len2];
}

console.log(editDistance('FAMILY', 'FRAME'));
console.log(editDistance('horse', 'ros'));
console.log(editDistance('intention', 'execution'));
