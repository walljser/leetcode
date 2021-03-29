/**
  15. 三数之和
  给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

  注意：答案中不可以包含重复的三元组。

  示例 1：
  输入：nums = [-1,0,1,2,-1,-4]
  输出：[[-1,-1,2],[-1,0,1]]

  示例 2：
  输入：nums = []
  输出：[]

  示例 3：
  输入：nums = [0]
  输出：[]
 */

var partition = function (nums, low, high) {
  const pivot = nums[low];
  let left = low, right = high;
  while (left < right) {
    while (left < right && nums[right] >= pivot) {
      right--;
    }
    while (left < right && nums[left] <= pivot) {
      left++;
    }
    if (left < right) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
    }
  }
  if (pivot < nums[left]) {
    nums[low] = nums[left - 1];
    nums[left - 1] = low;
    return left - 1;
  } else {
    nums[low] = nums[left];
    nums[left] = pivot;
    return left;
  }
}

var quickSort = function (nums, low, high) {
  if (low < high) {
    const mid = partition(nums, low, high);
    quickSort(nums, low, mid - 1);
    quickSort(nums, mid + 1, high);
  }
}

/**
 * 先将数组进行排序，然后从左遍历一个数，再进行双指针遍历。
 * 由于数组是有序的，从左往右遍历时，遇到重复的就可以跳过
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const len = nums.length;
  const arr = [];
  if (len < 3) {
    return arr;
  }
  // nums.sort((a, b) => a - b);
  quickSort(nums, 0, len - 1);
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    if (num > 0) {
      break
    }
    if (i > 0 && num === nums[i - 1]) {
      // 重复，跳过
      continue
    }
    let left = i + 1, right = len - 1;
    while (left < right) {
      const sum = num + nums[left] + nums[right];
      if (sum === 0) {
        arr.push([num, nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        // 合小于0，较小的那个数需要变大
        left++;
      } else if (sum > 0) {
        // 合大于0，较大的那个数需要变小
        right--;
      }
    }
  }
  return arr;
};

console.log(threeSum([3,0,-2,-1,1,2]));
console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([]));
console.log(threeSum([0]));
