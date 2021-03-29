/**
14. 最长公共前缀
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1：
输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 */

var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }
  let prefix = strs[0], i = 0, len = strs.length;
  while (prefix !== '' && i < len) {
    const pLen = prefix.length;
    const s = strs[i].slice(0, pLen);
    let start = 0;
    while (start < pLen) {
      if (s[start] === prefix[start]) {
        start++;
      } else {
        prefix = prefix.slice(0, start);
        break;
      }
    }
    i++;
  }
  return prefix;
};

// console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
