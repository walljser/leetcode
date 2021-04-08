// 后序遍历
// var minDepth = function (root) {
//   if (!root) {
//     return 0;
//   }
//   if (!root.left && !root.right) {
//     return 1;
//   }
//   let min = Number.MAX_SAFE_INTEGER;
//   if (root.left) {
//     min = Math.min(minDepth(root.left), min);
//   }
//   if (root.right) {
//     min = Math.min(minDepth(root.right), min);
//   }
//   return min + 1;
// }

// BFS
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  const queue = [];
  queue.push(root);
  let depth = 1;

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (!node.left && !node.right) {
        return depth;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    depth++;
  }
  return depth;
}
