// var fib = function(n) {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// };

// var fib = function (n) {
//   const dp = [];
//   dp[0] = 0;
//   dp[1] = 1;
//   if (n <= 1) {
//     return dp[n];
//   }
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n];
// }

var fib = function (n) {
  let pre1 = 0;
  let pre2 = 0;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      res = 0;
      pre1 = 0;
      pre2 = 0;
    } else if (i === 1) {
      res = 1;
      pre1 = 1;
      pre2 = 0;
    } else {
      res = pre1 + pre2;
      pre2 = pre1;
      pre1 = res;
    }
  }
  return res;
}

console.log(fib(9));
