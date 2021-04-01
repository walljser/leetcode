/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const res = [];
  if (!root) {
    return res;
  }

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let currentLevelLength = queue.length;

    res.unshift([]);


    while (currentLevelLength > 0) {
      const node = queue.shift();
      res[0].push(node.val);
      currentLevelLength--;
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
