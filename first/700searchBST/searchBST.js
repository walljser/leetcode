/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// var searchBST = function(root, val) {
//   if (!root) {
//     return null;
//   }

//   let node = null;
//   const midTraverse = function(root) {
//     if (!root) {
//       return;
//     }
//     midTraverse(root.left);
//     if (root.val === val) {
//       node = root;
//     }
//     midTraverse(root.right);
//   }
//   midTraverse(root);
//   return node;
// };


// var searchBST = function(root, val) {
//   if (!root) {
//     return null;
//   } else if (root.val < val) {
//     return searchBST(root.right, val);
//   } else if (root.val > val) {
//     return searchBST(root.left, val);
//   } else {
//     return root;
//   }
// };

var searchBST = function(root, val) {
  if (!root || root.val === val) {
    return root
  }
  while (root) {
    if (root.val > val) {
      root = root.left;
    } else if (root.val < val) {
      root = root.right;
    } else {
      return root;
    }
  }
  return null;
};
