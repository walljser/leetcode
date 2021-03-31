/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// var sortedListToBST = function(head) {
//   if (!head) {
//     return null;
//   }
//   let slow = head;
//   let fast = head;
//   let preSlow = null;
//   while (fast && fast.next) {
//     preSlow = slow;
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   const root = new TreeNode(slow.val);

//   if (preSlow) {
//     preSlow.next = null;
//     root.left = sortedListToBST(head);
//   }

//   root.right = sortedListToBST(slow.next);

//   return root;
// };

var sortedListToBST = function(head) {
  if (!head) {
    return null;
  }
  const list = [];
  while (head) {
    list.push(head.val);
    head = head.next;
  }

  const buildBST = function (left, right) {
    if (left >= right) {
      return null;
    }
    const mid = Math.floor((left + right) / 2);
    const root = new TreeNode(list[mid]);

    root.left = buildBST(left, mid - 1);
    root.right = buildBST(mid + 1, right);

    return root;
  }

  return buildBST(0, list.length - 1);
}
