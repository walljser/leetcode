function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}



/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  if (!root) {
    return 0;
  }
  let max = Number.MIN_SAFE_INTEGER;
  var onePathSum = function (root) {
    if (!root) {
      return 0
    }
    const leftMax = Math.max(0, onePathSum(root.left));
    const rightMax = Math.max(0, onePathSum(root.right));
    max = Math.max(max, leftMax + rightMax + root.val);
    return root.val + Math.max(leftMax, rightMax);
  }
  onePathSum(root);
  return max
};

const left1 = new TreeNode(9);
const left2 = new TreeNode(15);
const right1 = new TreeNode(7);
const right2 = new TreeNode(20, left2, right1);
const root = new TreeNode(-10, left1, right2);
// const root = new TreeNode(-3);

const num = maxPathSum(root);
console.log(num);
