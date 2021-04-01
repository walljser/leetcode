/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) {
    return;
  }
  const list = [];
  const preTraverse = function (root) {
    if (!root) {
      list.push(root);
      preTraverse(root.left);
      preTraverse(root.right);
    }
  }
  preTraverse(root);
  const size = list.length;
  for (let i = 1; i < size; i++) {
    const prev = list[i - 1];
    const current = list[i];
    prev.left = null;
    prev.next = current;
  }
};
