/**
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

/**
 * 方法一：合并两个有序数组，使用了归并排序的知识
 * 时间复杂度：O(m + n)
 * 空间复杂度：开辟了一个新数组，O(m + n)
 */
// var findMedianSortedArrays = function(nums1, nums2) {
//   const m = nums1.length;
//   const n = nums2.length;
//   let i = 0;
//   let j = 0;
//   let p = 0;
//   let arr = [];
//   while (i < m && j < n) {
//     if (nums1[i] < nums2[j]) {
//       arr[p++] = nums1[i++];
//     } else {
//       arr[p++] = nums2[j++];
//     }
//   }
//   while (i < m) {
//     arr[p++] = nums1[i++];
//   }
//   while (j < n) {
//     arr[p++] = nums2[j++];
//   }
//   let mid = (m + n) / 2;
//   if (mid % 1 === 0) {
//     return ((arr[mid - 1] + arr[mid]) / 2).toFixed(5);
//   } else {
//     mid = Math.floor(mid);
//     return arr[mid].toFixed(5);
//   }
// };

/**
 * 方法二：写一个循环，判断是否到了中位数的位置，依赖两个指针遍历，只遍历到 m + n / 2 的位置，跳出循环。m + n是奇数和偶数的情况返回结果不一样，需要一个left，right来记录两个数，最后在返回的时候判断使用
 * 时间复杂度：O(m + n)
 * 空间复杂度：O(1)
 */
// var findMedianSortedArrays = function(nums1, nums2) {
//   const m = nums1.length, n = nums2.length;
//   const count = m + n;
//   let aStart = 0, bStart = 0, left = -1, right = -1;
//   for (i = 0; i <= count / 2; i++) {
//     left = right;
//     if (aStart < m && (bStart >= n || nums1[aStart] < nums2[bStart])) {
//       right = nums1[aStart++];
//     } else {
//       right = nums2[bStart++];
//     }
//   }
//   if (count % 2 === 0) {
//     return ((left + right) / 2).toFixed(5);
//   } else {
//     return right.toFixed(5);
//   }
// };

/**
 * 方法三：本质是要找第k个小数，在方法二的基础上优化，方法二每次循环排除掉1个元素，其实我们可以利用二分查找的优势，每次跳过 k /2 个数
 * 时间复杂度：O(m + n)
 * 空间复杂度：O(1)
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const left = Math.floor((m + n + 1) / 2); // 定义left和right是将两种情况合并起来处理，最后 * 0.5就行
  const right = Math.floor((m + n + 2) / 2);

  return ((getKth(nums1, 0, m - 1, nums2, 0, n - 1, left) + getKth(nums1, 0, m - 1, nums2, 0, n - 1, right)) * 0.5).toFixed(5)
};

var getKth = function (nums1, start1, end1, nums2, start2, end2, k) {
  const len1 = end1 - start1 + 1;
  const len2 = end2 - start2 + 1;
  if (len1 === 0) {
    return nums2[start2 + k - 1];
  }
  if (len1 > len2) {
    return getKth(nums2, start2, end2, nums1, start1, end1, k);
  }

  if (k === 1) {
    return Math.min(nums1[start1], nums2[start2]);
  }

  const k2 = Math.floor(k / 2);

  const i = start1 + Math.min(len1, k2) - 1; // 需要 - 1，数组从0开始
  const j = start2 + Math.min(len2, k2) - 1;

  if (nums1[i] > nums2[j]) {
    // j - start2 + 1是跳过的个数
    return getKth(nums1, start1, end1, nums2, j + 1, end2, k - (j - start2 + 1));
  } else {
    return getKth(nums1, i + 1, end1, nums2, start2, end2, k - (i - start1 + 1));
  }
}

const nums1 = [1,3];
const nums2 = [2];
// const nums1 = [1,2];
// const nums2 = [3,4];
// const nums1 = [1];
// const nums2 = [3];


console.log(findMedianSortedArrays(nums1, nums2));
