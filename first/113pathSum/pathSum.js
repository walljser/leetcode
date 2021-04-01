/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const resultList = [];
  if (!root) {
    return resultList;
  }

  const preTraverse = function (root, pathSum, list = []) {
    if (!root) {
      return ;
    }
    const currentSum = pathSum + root.val;
    const subList = [...list];
    subList.push(root.val);
    if (!root.left && !root.right) {
      if (currentSum === targetSum) {
        resultList.push(subList);
      }
      return;
    }
    preTraverse(root.left, currentSum, subList);
    preTraverse(root.right, currentSum, subList);
  }

  preTraverse(root, 0);

  return resultList;
};
