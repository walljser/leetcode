// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

// 假设一个二叉搜索树具有如下特征：
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var isValidBST = function(root) {
  let pre = Number.MIN_SAFE_INTEGER;

  var midTraverse = function (node) {
    if (!node) {
      return true;
    }
    if (!midTraverse(node.left)) {
      return false;
    }
    if (node.val <= pre) {
      return false;
    }
    pre = node.val;
    return midTraverse(node.right);
  }

  return midTraverse(root);
};
