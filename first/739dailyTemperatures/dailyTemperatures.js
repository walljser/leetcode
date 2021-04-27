/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const n = T.length;
  const res = new Array(n).fill(0);
  const stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && T[stack[stack.length - 1]] < T[i]) {
      const index = stack.pop();
      res[index] = i - index;
    }
    stack.push(i);
  }
  return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
