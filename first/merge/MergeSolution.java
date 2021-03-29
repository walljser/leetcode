/**
  88. 合并两个有序数组
  给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

  初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
 */

package merge;

public class MergeSolution {
  public void merge(int[] nums1, int m, int[] nums2, int n) {
    int[] nums1Copy = new int[m];
    System.arraycopy(nums1, 0, nums1Copy, 0, m);

    int p1 = 0;
    int p2 = 0;

    int p = 0;
    while ((p1 < m) && (p2 < n)) {
      nums1[p++] = nums1Copy[p1] < nums2[p2] ? nums1Copy[p1++] : nums2[p2++];
    }
    if (p1 < m) {
      System.arraycopy(nums1Copy, p1, nums1, p1 + p2, m + n - p1 - p2);
    }
    if (p2 < n) {
      System.arraycopy(nums2, p2, nums1, p1 + p2, m + n - p1 - p2);
    }
  }
}
