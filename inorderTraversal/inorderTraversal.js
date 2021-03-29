/**
 * 94. 二叉树的中序遍历
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 */
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var inorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  if (!root.left && !root.right) {
    if (root.val) {
      return [root.val];
    } else {
      return [];
    }
  }
  const nums = [];

  var midTraverse = function (node) {
    if (!node) {
      return ;
    }
    if (node.left) {
      midTraverse(node.left);
    }
    nums.push(node.val);
    if (node.right) {
      midTraverse(node.right);
    }
  }

  midTraverse(root);

  return nums;
};
