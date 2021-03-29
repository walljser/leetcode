/**
 *  95. 不同的二叉搜索树 II
 *  给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) {
    return [];
  }

  var getAns = function (start, end) {
    const ans = [];
    if (start > end) {
      ans.push(null);
      return ans;
    }
    if (start === end) {
      const node = new TreeNode(start);
      ans.push(node);
      return ans;
    }
    for (let i = start; i <= end; i++) {
      const leftTrees = getAns(start, i - 1);
      const rightTrees = getAns(i + 1, end);

      for (let leftTree of leftTrees) {
        for (let rightTree of rightTrees) {
          const root = new TreeNode(i);
          root.left = leftTree;
          root.right = rightTree;
          ans.push(root);
        }
      }
    }

    return ans;
  };

  return getAns(1, n);
};

