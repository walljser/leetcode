// var postorderTraversal = function (root) {
//   const list = [];
//   if (!root) {
//     return list;
//   }

//   const postorder = function (node) {
//     if (node) {
//       postorder(node.left);
//       postorder(node.right);
//       list.push(node.val);
//     }
//   }

//   postorder(root);

//   return list;
// }

var postorderTraversal = function (root) {
  const list = [];
  if (!root) return list;
  const stack = [];
  let prev = null;

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (!root.right || root.right === prev) {
      list.push(root.val);
      prev = root;
      root = null;
    } else {
      stack.push(root);
      root = root.right;
    }
  }

  return list;
}
