/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  let cur = root;
  while (cur) {
    if (cur.val < val) {
      if (!cur.right) {
        cur.right = new TreeNode(val);
        break;
      } else {
        cur = cur.right;
      }
    } else {
      if (!cur.left) {
        cur.left = new TreeNode(val);
        break;
      } else {
        cur = cur.left;
      }
    }
  }
  return root;
};
