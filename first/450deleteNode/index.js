function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) {
    return null;
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val === key) {
    if (!root.left && !root.right) {
      return null;
    } else if (!root.right) {
      return root.left;
    } else {
      let right = root.right;
      while (right.left) {
        right = right.left;
      }
      right.left = root.left;
      return root.right;
    }
  }
  return root;
};

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);
const n5 = new TreeNode(5);
const n6 = new TreeNode(6);
n3.left = n2;
n2.left = n1;
n3.right = n5;
n5.left = n4;
n5.right = n6;

deleteNode(n3, 3);
