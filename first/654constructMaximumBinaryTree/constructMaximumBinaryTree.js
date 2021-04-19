function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var getMax = function (nums) {
  let maxNum = Number.MIN_SAFE_INTEGER;
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNum) {
      maxNum = nums[i];
      maxIndex = i;
    }
  }
  return [maxNum, maxIndex];
}
var constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) {
    return;
  }
  const [num, index] = getMax(nums);
  const root = new TreeNode(num);

  if (index > 0) {
    root.left = constructMaximumBinaryTree(nums.slice(0, index));
  }
  if (index < nums.length - 1) {
    root.right = constructMaximumBinaryTree(nums.slice(index + 1, nums.length));
  }
  return root;
};

const root = constructMaximumBinaryTree([3,2,1,6,0,5]);
console.log(root);
