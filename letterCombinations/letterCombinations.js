/**
  17. 电话号码的字母组合
  给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

  给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

  示例 1：
  输入：digits = "23"
  输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

  示例 2：
  输入：digits = ""
  输出：[]

  示例 3：
  输入：digits = "2"
  输出：["a","b","c"]
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  var targetDigits = digits.replace('1', '');
  if (targetDigits.length === 0) {
    return []
  }
  const len = digits.length;
  const nums = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };
  const arr = nums[digits[0]];
  for (let i = 0; i < len; i++) {
    if (digits[i] === '1') {
      continue
    }
    arr.push(nums[digits[i]]);
    console.log(nums[digits[i]]);
  }
  console.log(arr);
};

console.log(letterCombinations('23'));
