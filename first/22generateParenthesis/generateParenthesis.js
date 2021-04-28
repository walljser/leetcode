/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];
  let curStr = '';

  const backtrack = function(curStr, left, right) {
    if (left === 0 && right === 0) {
      res.push(curStr);
      return;
    }
    if (left > right) {
      return;
    }
    if (left > 0) {
      backtrack(curStr + '(', left - 1, right);
    }
    if (right > 0) {
      backtrack(curStr + ')', left, right - 1);
    }
  }

  backtrack(curStr, n, n)
  return res;
};

console.log(generateParenthesis(3));
