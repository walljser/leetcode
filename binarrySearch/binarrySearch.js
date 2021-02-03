/**
 * 二分查找
 * 时间复杂度：O(logn)
 * 空间复杂度：O(1)
 * 如果用递归来实现二分查找，时间复杂度O(logn)，空间复杂度O(logn)，logn次调用了栈
 */
function binarrySearch(s, x) {
  const len = s.length;
  let low = 0;
  let high = len - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (x === s[middle]) {
      return middle;
    } else if (x < s[middle]) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return -1;
}

const a = [60, 17, 39, 15, 8, 34, 30, 45, 5, 52, 25];
a.sort((a, b) => a - b);
console.log(a);

console.log(binarrySearch(a, 17));
