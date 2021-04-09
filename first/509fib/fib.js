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

// var fib = function (n) {
//   let pre1 = 0;
//   let pre2 = 0;
//   let res = 0;
//   for (let i = 0; i <= n; i++) {
//     if (i === 0) {
//       res = 0;
//       pre1 = 0;
//       pre2 = 0;
//     } else if (i === 1) {
//       res = 1;
//       pre1 = 1;
//       pre2 = 0;
//     } else {
//       res = pre1 + pre2;
//       pre2 = pre1;
//       pre1 = res;
//     }
//   }
//   return res;
// }

var fib = function (n) {
  const  table = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040];
  return table[n];
}

console.log(fib(9));
