/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let right = nums.length - 1;
  while (right > 0) {
    if (nums[right - 1] < nums[right]) {
      break
    } else {
      right--;
    }
  }
  console.log(right);
};
nextPermutation([1,3,2])
