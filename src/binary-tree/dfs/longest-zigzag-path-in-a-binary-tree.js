/**
 * 1372. longest-zigzag-path-in-a-binary-tree
 * https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/?envType=study-plan-v2&envId=leetcode-75
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
var longestZigZag = function (root) {
  let zigzagCount = 0;

  const preorder = (node, goLeft, max) => {
    if (!node) return;
    zigzagCount = Math.max(max, zigzagCount);

    if (goLeft) {
      preorder(node.left, false, ++max);
      preorder(node.right, true, 1);
    } else {
      preorder(node.right, true, ++max);
      preorder(node.left, false, 1);
    }
  };

  preorder(root.left, false, 1);
  preorder(root.right, true, 1);

  return zigzagCount;
};

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
var longestZigZag = function (root, side, length) {
  if (!root) return length;

  const left = longestZigZag(root.left, 0, side ? length + 1 : 0);
  const right = longestZigZag(root.right, 1, side === 0 ? length + 1 : 0);

  return Math.max(left, right);
};
