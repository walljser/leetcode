function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) {
    return 'X';
  }
  const left = serialize(root.left);
  const right = serialize(root.right);
  return root.val + ',' + left + ',' + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const list = data.split(',');
  console.log(list);
  var buildTree = function(list) {
    const nodeVal = list.shift();
    if (nodeVal === 'X') {
      return null;
    }
    const node = new TreeNode(nodeVal);
    node.left = buildTree(list);
    node.right = buildTree(list);
    return node;
  }
  return buildTree(list);
};

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);
const n5 = new TreeNode(5);
n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;

const str = serialize(n1);
console.log(str);
const tree = deserialize(str);
console.log(tree);
