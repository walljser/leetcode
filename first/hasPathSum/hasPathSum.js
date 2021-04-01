/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  const preTraverse = function (root, currentNum) {
    if (!root) {
      return false;
    }
    currentNum += root.val;
    if (!root.left && !root.right) {
      return targetSum === currentNum;
    }
    return preTraverse(root.left, currentNum) || preTraverse(root.right, currentNum);
  }

  return preTraverse(root, 0);
}
