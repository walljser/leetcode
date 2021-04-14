/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  if (!root) {
    return root;
  }
  let sum = 0;

  var midTraverse = function(node) {
    if (node) {
      midTraverse(node.right);
      sum += node.val;
      node.val = sum;
      midTraverse(node.left);
    }
  }

  midTraverse(root);

  return root;
};
