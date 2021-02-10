/**
  20. 有效的括号
  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

  有效字符串需满足：
  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。
 */

/**
 * 解题思路，用栈，遇到 (,{,[入栈，遇到左括号就入栈，遇到右括号就将栈顶元素拿出来对比，不配对就false。最后判断栈是否为空，不为空就false。
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const len = s.length;
  if (len % 2 !== 0) {
    return false;
  }
  const pairs = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);
  const stack = [];
  const list = s.split('');
  for (let i = 0; i < list.length; i++) {
    const ch = list[i];
    if (pairs.has(ch)) {
      if (stack.length === 0 || stack[stack.length - 1] !== pairs.get(ch)) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return stack.length === 0;
};

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("([)]"));
// console.log(isValid("{[]}"));
console.log(isValid("([}}])"));
