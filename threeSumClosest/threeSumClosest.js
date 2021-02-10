/**
  16. 最接近的三数之和
  给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

  示例：
  输入：nums = [-1,2,1,-4], target = 1
  输出：2
  解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  let closest = 1e7;
  let num = 1e7;
  for (let i = 0; i < len; i++) {
    if (closest === 0) {
      break;
    }
    let left = i + 1, right = len - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      const sub = sum > target ? sum - target : target - sum;
      if (sub <= closest) {
        closest = sub;
        num = sum;
      }
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        return target;
      }
    }
  }
  return num;
};

console.log(threeSumClosest([-1,2,1,-4], 1));
console.log(threeSumClosest([0,1,2], 3));
