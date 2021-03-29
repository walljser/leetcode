// leetcode 12. 整数转罗马数字

/**
 * 贪心算法，每次取一个距离num最大的值。
 * 136 ms, 在所有 JavaScript 提交中击败了98.51%的用户
 * 时间复杂度：O(1)， 从大遍历到小，数值有限，遍历几次就结束了
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  const len = n.length;
  let str = '';
  for (let i = len - 1; i >= 0 && num >= 0; i--) {
    while (n[i] <= num) {
      num = num - n[i];
      str = str + roman[i];
    }
  }
  return str;
};

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(58));
console.log(intToRoman(1994));
