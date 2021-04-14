/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  if (!root) {
    return root;
  }
  var sum = 0;

  var midTraverse = function(root) {
    if (root) {
      midTraverse(root.right);
      sum += root.val;
      root.val = sum;
      midTraverse(root.left);
    }
  }

  midTraverse(root);

  return root;
};
