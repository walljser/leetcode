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
 * @return {number}
 */
const countLevel = function(root) {
  if (!root) {
    return 0;
  }
  let cur = root;
  let count = 0;
  while (cur) {
    count++;
    cur = cur.left;
  }
  return count;
}

var countNodes = function(root) {
  if (!root) {
    return 0;
  }
  const left = countLevel(root.left);
  const right = countLevel(root.right);
  if (left === right) {
    return countNodes(root.right) + Math.pow(2, left) - 1;
  } else {
    return countLevel(root.left) + Math.pow(2, right) - 1;
  }
};
