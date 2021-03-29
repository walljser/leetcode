/**
  输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
  输出：2
  解释：
  3x3 网格的正中间有一个障碍物。
  从左上角到右下角一共有 2 条不同的路径：
  1. 向右 -> 向右 -> 向下 -> 向下
  2. 向下 -> 向下 -> 向右 -> 向右
 */

/**
 * 动态规划求解。。。。。。但是情况太多了，入口就有可能被封住
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1]) {
    // 入口走不了和最后一格走不了的情况
    return 0;
  }
  // 默认入口可以走
  const dp = [1];
  for (let i = 1; i < n; i++) {
    if (obstacleGrid[0][i] === 1) {
      // 有一个堵住，右边堵住了
      dp[i] = 0;
    } else {
      dp[i] = dp[i - 1];
    }
  }
  for (let i = 1; i < m; i++) {
    const g = obstacleGrid[i];
    if (g[0] === 1) {
      dp[0] = 0;
    }
    for (let j = 1; j < n; j++) {
      if (g[j] === 1) {
        dp[j] = 0;
      } else {
        dp[j] += dp[j - 1];
      }
    }
  }
  return dp[n - 1];
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));
console.log(uniquePathsWithObstacles([[0,1],[0,0]]));
console.log(uniquePathsWithObstacles([[1,0]]));
console.log(uniquePathsWithObstacles([[0],[1]]));
console.log(uniquePathsWithObstacles([[0, 0],[1, 0]]));
console.log(uniquePathsWithObstacles([[0, 1, 0, 0, 0],[1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]));
