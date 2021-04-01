function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const map = {}
  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i;
  }
  var buildTreeHelper = function (iOrder, inStart, inEnd, pOrder, pStart, pEnd) {
    if (pStart > pEnd || inStart > inEnd) {
      return null;
    }
    const rootVal = pOrder[pEnd];
    const rootNode = new TreeNode(rootVal);
    let inOrderRootIndex = map[rootVal];
    const leftNum = inOrderRootIndex - inStart;
    rootNode.left = buildTreeHelper(iOrder, inStart, inOrderRootIndex - 1, pOrder, pStart, pStart + leftNum - 1);
    rootNode.right = buildTreeHelper(iOrder, inOrderRootIndex + 1, inEnd, pOrder, pStart + leftNum, pEnd - 1)
    return rootNode;
  }
  return buildTreeHelper(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};
