function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// var recoverTree = function(root) {
//   if (!root || (!root.left && !root.right)) {
//     return ;
//   }
//   const list = [];

//   const dfs = function (node) {
//     if (!node) {
//       return ;
//     }
//     dfs(node.left);
//     list.push(node);
//     dfs(node.right);
//   }

//   dfs(root);
//   let x, y;
//   for (let i = 0; i < list.length - 1; i++) {
//     if (list[i].val > list[i + 1].val) {
//       // 持续寻找比x小的树
//       y = list[i + 1];
//       if (!x) {
//         // x是找到的第一个小于后面的树
//         x = list[i];
//       }
//     }
//   }
//   if (x && y) {
//     const temp = x.val;
//     x.val = y.val;
//     y.val = temp;
//   }
// };

// var recoverTree = function(root) {
//   if (!root || (!root.left && !root.right)) {
//     return ;
//   }
//   let pre;
//   let x, y;

//   var dfs = function (node) {
//     if (!node) {
//       return ;
//     }

//     dfs(node.left);
//     if (pre) {
//       if (pre.val > node.val) {
//         if (!x) {
//           x = pre;
//         }
//         y = node;
//       }
//       pre = node;
//     } else {
//       pre = node;
//     }
//     dfs(node.right);
//   }

//   dfs(root);

//   if (x && y) {
//     const temp = x.val;
//     x.val = y.val;
//     y.val = temp;
//   }
// };
