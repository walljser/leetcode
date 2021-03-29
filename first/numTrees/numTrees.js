/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    // 以 i 作为顶点构造二叉搜索树
    for (let j = 0; j <= i - 1; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }
  return dp[n];
};

console.log(numTrees(3));
