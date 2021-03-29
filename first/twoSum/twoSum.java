class Solution {
  public static int[] twoSum(int[] nums, int target) {
    int[] anwsers = new int[2];
    for (int i = 0; i < nums.length; i++) {
      for (int j = nums.length - 1; j >= 0; j--) {
        if (i == j) {
          continue;
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
