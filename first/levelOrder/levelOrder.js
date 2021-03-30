/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = [];
  if (!root) {
    return res;
  }
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const currentLevelSize = queue.length;
    res.push([]);
    for (let i = 0; i < currentLevelSize; ++i) {
      const node = queue.shift();
      res[res.length - 1].push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return res;
};
