/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  let minDepthNum = Number.MAX_SAFE_INTEGER;
  if (root.left) {
    minDepthNum = Math.min(minDepth(root.left), minDepthNum);
  }
  if (root.right) {
    minDepthNum = Math.min(minDepth(root.right), minDepthNum);
  }
  return minDepthNum + 1;
};
