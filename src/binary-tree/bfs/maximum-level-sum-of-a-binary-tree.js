/**
 * 1161. maximum-level-sum-of-a-binary-tree
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/?envType=study-plan-v2&envId=leetcode-75
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
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  const queue = [];
  let maxSum = -Infinity;
  let depth = 0;
  let maxLevelIndex = 0;

  queue.push(root);

  while (queue.length) {
    depth++;
    const size = queue.length;
    const sum = queue.reduce((acc, item) => acc + item.val, 0);
    if (sum > maxSum) {
      maxLevelIndex = depth;
    }
    maxSum = Math.max(maxSum, sum);

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return maxLevelIndex;
};
