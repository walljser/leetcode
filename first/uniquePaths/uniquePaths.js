/**
  62. 不同路径
  一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

  机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

  问总共有多少条不同的路径？
 */

/**
 * 动态规划解题，dp[i][j]为走到i,j的路径数
 * 递归出口，dp[0][*] = 1, dp[*][0] = 1
 */
// var uniquePaths = function(m, n) {
//   const dp = []
//   for (let i = 0; i < m; i++) {
//     dp[i] = [1]
//   }
//   for (let j = 0; j < n; j++) {
//     dp[0][j] = 1;
//   }
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//     }
//   }
//   return dp[m - 1][n - 1];
// };

/**
 * 优化思路：每一行的计算其实只依赖于上一行，画图可以看出
 */
var uniquePaths = function(m, n) {
  const dp = new Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] = dp[j] + dp[j - 1];
    }
  }
  return dp[n - 1];
};

console.log(uniquePaths(1, 1));
console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));
console.log(uniquePaths(3, 3));
