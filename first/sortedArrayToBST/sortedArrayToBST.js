/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) {
    return null;
  }

  const preTraverse = function (nums, left, right) {
    if (left > right) {
      return null;
    }
    const mid = Math.floor((left + right) / 2)
    const root = new TreeNode(nums[mid]);
    root.left = preTraverse(nums, left, mid - 1);
    root.right = preTraverse(nums, mid + 1, right);
    return root;
  }

  return preTraverse(nums, 0, nums.length - 1)
};
