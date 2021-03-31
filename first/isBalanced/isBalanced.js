/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isBalanced = function(root) {
//   if (!root) {
//     return true;
//   } else {
//     return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
//   }
// };

// var getHeight = function (root) {
//   if (!root) {
//     return 0;
//   } else {
//     return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
//   }
// }

var getDepth = function (root) {
  if (!root) {
    return 0;
  }
  const leftHeight = getDepth(root.left);
  const rightHeight = getDepth(root.right);
  if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

var isBalanced = function (root) {
  return getDepth(root) !== -1;
}
