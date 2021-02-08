/**
  leetcode 11. 盛最多水的容器
 */

/**
 * 双指针遍历，每次移动height[point]值较小的那个指针
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  const len = height.length;
  let max = 0, left = 0, right = len - 1;
  while (left < right) {
    const area = Math.abs(left - right) * Math.min(height[left], height[right]);
    if (area > max) {
      max = area;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));
console.log(maxArea([4,3,2,1,4]));
console.log(maxArea([1,2,1]));
