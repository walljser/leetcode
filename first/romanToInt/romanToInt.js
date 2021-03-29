// leetcode 13. 罗马数字转整数

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const r = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  const sLen = s.length;
  let i = 0, num = 0;
  while (i < s.length) {
    const c = s[i];
    const c2 = s[i + 1]
    if (r[c] < r[c2]) {
      num += r[c2] - r[c];
      i += 2;
    } else {
      num += r[c];
      i++;
    }
  }
  return num;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
