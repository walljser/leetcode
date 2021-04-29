/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }
  const n = nums.length;
  let slow = 1, fast = 1;
  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};

const a = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(a));
console.log(a);
