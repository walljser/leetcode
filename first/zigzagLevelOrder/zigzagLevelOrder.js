/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  const res = [];
  if (!root) {
    return res;
  }
  const queue = [];
  queue.push(root);
  let flag = 0;
  while (queue.length > 0) {
    const currentLevelSize = queue.length;
    res.push([]);
    for (let i = 0; i < currentLevelSize; i++) {
      const node = queue.shift();
      if (flag % 2 === 0) {
        res[res.length - 1].push(node.val);
      } else {
        res[res.length - 1].unshift(node.val);
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    flag++;
  }
  return res;
};
