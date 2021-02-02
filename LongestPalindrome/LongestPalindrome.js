/**
 * 中心扩散法
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */

var longestPalindrome = function(s) {
  const len = s.length;
  if (len < 2) {
    return s;
  }
  let maxLen = 1;
  let begin = 0;
  for (let i = 0; i < len - 1; i++) {
    const oddLen = expandAroundCenter(s, i, i);
    const evenLen = expandAroundCenter(s, i, i + 1);
    const currMaxLen = Math.max(oddLen, evenLen);
    if (currMaxLen > maxLen) {
      maxLen = currMaxLen;
      begin = i - Math.floor((maxLen - 1) / 2);
    }
  }
  return s.slice(begin, begin + maxLen);
};

function expandAroundCenter (s, left, right) {
  const len = s.length;
  let i = left;
  let j = right;
  while (i >= 0 && j < len) {
    if (s[i] == s[j]) {
      i--;
      j++;
    } else {
      break;
    }
  }
  return j - i - 1;
}
