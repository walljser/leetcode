class Solution {
  public static int[] twoSum(int[] nums, int target) {
    int[] anwsers;
    for (let i = 0; i < nums.length; i++) {
      for (let j = nums - 1; j >= 0; j--) {
        if (i == j) {
          continue
        }
        if (nums[i] + nums[j] == target) {
          anwsers[0] = i;
          anwsers[1] = j;
          return anwsers;
        }
      }
    }
    return anwsers;
  }
}

public static void main () {
  int[] nums = [3,2,4];
  int a = Solution.twoSum(nums, 6);
  System.out.println(a);
}
