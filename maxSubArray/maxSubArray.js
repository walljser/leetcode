/**
  53. 最大子序和
  给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let ans = nums[0], sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] + sum) > nums[i]) {
      sum = sum + nums[i];
    } else {
      sum = nums[i];
    }
    ans = Math.max(ans, sum);
  }
  return ans;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([0]));
console.log(maxSubArray([-1]));
