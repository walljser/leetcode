/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const m = haystack.length;
  const n = needle.length;
  for (let i = 0; i <= m - n; i++) {
    let flag = true;
    for (let j = 0; j < n; j++) {
      if (haystack[i + j] !== needle[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return i;
    }
  }
  return -1;
};


console.log(strStr('abc', 'c'));
