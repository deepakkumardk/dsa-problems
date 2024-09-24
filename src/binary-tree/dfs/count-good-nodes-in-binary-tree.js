/**
 * 1448. count-good-nodes-in-binary-tree
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/?envType=study-plan-v2&envId=leetcode-75
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
var goodNodes = function (root) {
  if (!root) return 0;

  let goodCount = 0;

  const countGoodNotes = (root, max) => {
    if (!root) return;

    const count = root.val >= max ? 1 : 0;
    goodCount += count;
    max = Math.max(root.val, max);
    countGoodNotes(root.left, max);
    countGoodNotes(root.right, max);
  };

  countGoodNotes(root, root.val);

  return goodCount;
};
