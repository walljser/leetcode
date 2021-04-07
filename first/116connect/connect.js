/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// var connect = function(root) {
//   if (!root) {
//     return null;
//   }
//   const queue = [];
//   queue.push(root);
//   while (queue.length > 0) {
//     const currentLength = queue.length;
//     for (let i = 0; i < currentLength; i++) {
//       const node = queue.shift();
//       if (i < size - 1) {
//         node.next = queue[0];
//       }
//       if (node.left) {
//         queue.push(node.left);
//       }
//       if (node.right) {
//         queue.push(node.right);
//       }
//     }
//   }

//   return root;
// };

var connect = function (root) {
  if (!root) {
    return root;
  }
  let leftRootNode = root;
  while (leftRootNode.left !== null) {
    let head = leftRootNode;
    while (head) {
      head.left.next = head.right;

      if (head.next) {
        head.right.next = head.next.left;
      }

      head = head.next;
    }
    leftRootNode = leftRootNode.left;
  }

  return root;
}
