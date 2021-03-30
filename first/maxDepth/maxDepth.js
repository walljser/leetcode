/**
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function(root) {
//   let num = 0;
//   if (!root) {
//     return num;
//   }
//   const queue = [];
//   queue.push(root);
//   while (queue.length > 0) {
//     let currentSize = queue.length;
//     while (currentSize > 0) {
//       const node = queue.shift();
//       if (node.left) {
//         queue.push(node.left)
//       }
//       if (node.right) {
//         queue.push(node.right)
//       }
//       currentSize--;
//     }
//     num++;
//   }
//   return num;
// };

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0
  }
  const leftHeight = maxDepth(root.left);
  const rightHeight = maxDepth(root.left);
  return Math.max(leftHeight, rightHeight) + 1;
};
