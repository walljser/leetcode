package findMedianSortedArrays;

/**
  4. 寻找两个正序数组的中位数
  给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。

  进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
  示例 1：

  输入：nums1 = [1,3], nums2 = [2]
  输出：2.00000
  解释：合并数组 = [1,2,3] ，中位数 2
  示例 2：

  输入：nums1 = [1,2], nums2 = [3,4]
  输出：2.50000
  解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
  示例 3：

  输入：nums1 = [0,0], nums2 = [0,0]
  输出：0.00000
  示例 4：

  输入：nums1 = [], nums2 = [1]
  输出：1.00000
  示例 5：

  输入：nums1 = [2], nums2 = []
  输出：2.00000
 */

public class FindMediaSortedArrays {
  /**
   * 暴力解法，用了合并排序的思想，双指针遍历
   * 时间复杂度：O(m + n)
   * 空间复杂度：O(m + n)
   */
  // public double findMediaSortedArrays(int[] nums1, int[] nums2) {
  //   int m = nums1.length, n = nums2.length, i = 0, j = 0, p = 0;
  //   int count = m + n;
  //   int[] a = new int[count];
  //   while (i < m && j < n) {
  //     a[p++] = nums1[i] < nums2[j] ? nums1[i++] : nums2[j++];
  //   }
  //   while (i < m) {
  //     a[p++] = nums1[i++];
  //   }
  //   while (j < n) {
  //     a[p++] = nums2[j++];
  //   }
  //   if (count % 2 == 0) {
  //     return (a[count / 2 - 1] + a[count / 2]) / 2.0;
  //   } else {
  //     return a[count / 2];
  //   }
  // }

  // public double findMediaSortedArrays(int[] nums1, int[] nums2) {
  //   int m = nums1.length;
  //   int n = nums2.length;
  //   int count = m + n;
  //   int start1 = 0, start2 = 0, left = -1, right = -1;
  //   for (int i = 0; i <= count / 2; i++) {
  //     left = right;
  //     if (start1 < m && (start2 >= n || nums1[start1] < nums2[start2])) {
  //       right = nums1[start1++];
  //     } else {
  //       right = nums2[start2++];
  //     }
  //   }
  //   if (count % 2 == 0) {
  //     return (left + right) / 2.0;
  //   }
  //   return right;
  // }

  public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    int m = nums1.length, n = nums2.length;
    int left = (m + n + 1) / 2;
    int right = (m + n + 2) / 2;
    return (getKth(nums1, 0, m - 1, nums2, 0, n - 1, left) + getKth(nums1, 0, m - 1, nums2, 0, n - 1, right)) / 2.0;
  }

  private int getKth(int[] nums1, int start1, int end1, int[] nums2, int start2, int end2, int k) {
//    int len1 = nums1.length, len2 = nums2.length;
    int len1 = end1 - start1 + 1;
    int len2 = end2 - start2 + 1;
    if (len1 == 0) {
      return nums2[start2 + k - 1];
    }
    if (len1 > len2) {
      return getKth(nums2, start2, end2, nums1, start1, end1, k);
    }

    // k = 1的时候，后面数组下标会出现-1，其实就是只要对比第一个就可以结束
    if (k == 1) {
      return Math.min(nums1[start1], nums2[start2]);
    }

    int i = start1 + Math.min(len1, k / 2) - 1;
    int j = start2 + Math.min(len2, k / 2) - 1;

    if (nums1[i] < nums2[j]) {
      return getKth(nums1, i + 1, end1, nums2, start2, end2, k - (i - start1 + 1));
    } else {
      return getKth(nums1, start1, end1, nums2, j + 1, end2, k - (j - start2 + 1));
    }
  }
}
