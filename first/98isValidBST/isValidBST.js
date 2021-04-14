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
 * @return {boolean}
 */
// var isValidBST = function(root) {
//   let pre = null;
//   let isValid = true;

//   const midTraverse = function(root) {
//     if (!root || !isValid) {
//       return;
//     }
//     midTraverse(root.left);
//     if (pre && pre.val > root.val) {
//       console.log(1111)
//       isValid = false;
//     }
//     pre = root;
//     midTraverse(root.right);
//   }
//   midTraverse(root);
//   return isValid;
// };


var isValidBST = function(root) {
  if (!root) {
    return false;
  }
  let cur = root;
  let preVal = null;
  const stack = [];
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    if (preVal !== null && preVal >= cur.val) {
      return false;
    }
    preVal = cur.val;
    cur = cur.right;
  }
  return true;
};
