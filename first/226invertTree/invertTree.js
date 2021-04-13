var invertTree = function(root) {
  if (!root) {
    return null;
  }
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  root.left = invertTree(root.left);
  root.rifht = invertTree(root.right);
  return root;
};
