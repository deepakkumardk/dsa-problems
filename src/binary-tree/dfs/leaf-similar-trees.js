/**
 * 872. leaf-similar-trees
 * https://leetcode.com/problems/leaf-similar-trees/?envType=study-plan-v2&envId=leetcode-75
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let leaf1 = [];
  let leaf2 = [];
  leaf1 = getLeaf(root1, leaf1);
  leaf2 = getLeaf(root2, leaf2);

  return leaf1.join(",") === leaf2.join(",");
};

function getLeaf(root, leaf) {
  if (!root) return leaf;

  if (!root.left && !root.right) {
    leaf.push(root.val);
  }
  getLeaf(root.left, leaf);
  getLeaf(root.right, leaf);

  return leaf;
}
