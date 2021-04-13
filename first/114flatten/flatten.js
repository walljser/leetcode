/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// var flatten = function (root) {
//   if (!root) {
//     return;
//   }
//   const list = [];
//   const preTraverse = function (root) {
//     if (!root) {
//       list.push(root);
//       preTraverse(root.left);
//       preTraverse(root.right);
//     }
//   }
//   preTraverse(root);
//   const size = list.length;
//   for (let i = 1; i < size; i++) {
//     const prev = list[i - 1];
//     const current = list[i];
//     prev.left = null;
//     prev.next = current;
//   }
// };

var flatten = function (root) {
  if (!root) {
    return;
  }
  flatten(root.left);
  flatten(root.right);

  const left = root.left;
  const right = root.right;

  root.left = null;
  root.right = left;

  let p = root;
  while (p.right) {
    p = p.right;
  }
  p.right = right;
}
