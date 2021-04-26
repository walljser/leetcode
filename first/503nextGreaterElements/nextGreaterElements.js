/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const len = nums.length;
  const res = new Array(len).fill(-1);
  const stack = [];
  for (let i = 0 ; i < 2 * len - 1; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i % len]) {
      res[stack[stack.length - 1]] = nums[i % len];
      stack.pop();
    }
    stack.push(i % len);
  }
  return res;
};

// console.log(nextGreaterElements([5,4,3,2,1]));
console.log(nextGreaterElements([100,1,11,1,120,111,123,1,-1,-100]));

// [120,11,120,120,123,123,-1,100,100,100]
