/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  const l1 = s1.length;
  const l2 = s2.length;
  const l3 = s3.length;
  if (l1 + l2 !== l3) {
    return false;
  }
  const dp = new Array(l1 + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(l2 + 1);
  }
  dp[0][0] = true
  for (let i = 1; i <= l1; i++) {
    if (s1[i - 1] === s3[i - 1] && dp[i - 1][0]) {
      dp[i][0] = true;
    } else {
      dp[i][0] = false;
    }
  }
  for (let j = 1; j <= l2; j++) {
    if (s2[j - 1] === s3[j - 1] && dp[0][j - 1]) {
      dp[0][j] = true;
    } else {
      dp[0][j] = false;
    }
  }
  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      if ((s1[i - 1] === s3[i + j - 1] && dp[i - 1][j]) || (s2[j - 1] === s3[i + j - 1] && dp[i][j - 1])) {
        dp[i][j] = true;
      } else {
        dp[i][j] = false;
      }
    }
  }
  return dp[l1][l2];
};

console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
// console.log(isInterleave('aabc', 'abad', 'aabcabad'));
