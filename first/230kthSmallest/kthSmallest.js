function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// var kthSmallest = function(root, k) {
//   if (!root) {
//     return null;
//   }
//   const list = [];

//   const midTraverse = function (root) {
//     if (!root) {
//       return;
//     }
//     midTraverse(root.left);
//     list.push(root.val);
//     midTraverse(root.right);
//   }

//   midTraverse(root);

//   return list[k + 1];
// }

var kthSmallest = function (root, k) {
  const stack = [];
  let current = root;
  let nums = 0;
  let res = -1;

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    nums++;
    if (nums === k) {
      return res = current.val;
    }
    current = current.right;
  }
  return -1;
}

const root = new TreeNode(3);
const child1 = new TreeNode(1);
const child2 = new TreeNode(2);
const child3 = new TreeNode(4);
root.left = child1;
root.right = child3;
child1.right = child2;

console.log(kthSmallest(root, 2));
// midTraverse(root);
