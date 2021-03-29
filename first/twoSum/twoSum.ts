/**
 * O(n2)暴力求解
 */

function twoSum(nums: number[], target: number): number[] {
  let anwser: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j >= 0; j--) {
      if (i === j) {
        continue
      }
      if (nums[i] + nums[j] === target) {
        anwser[0] = i;
        anwser[1] = j;
        return anwser;
      }
    }
  }
  return anwser;
}

