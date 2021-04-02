// var preorderTraversal = function(root) {
//   const list = [];
//   if (!root) {
//     return list;
//   }

//   var preorder = function (node) {
//     if (node) {
//       list.push(node.val);
//       preorder(node.left);
//       preorder(node.right);
//     }
//   }

//   preorder(root);

//   return list;
// };

var preorderTraversal = function (root) {
  const list = [];
  if (!root) {
    return list;
  }
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const node = queue.pop();
    list.push(node.val);
    if (node.right) {
      queue.push(node.right);
    }
    if (node.left) {
      queue.push(node.left);
    }
  }

  return list;
}
