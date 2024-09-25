/**
 * 437. path-sum-iii
 * https://leetcode.com/problems/path-sum-iii/?envType=study-plan-v2&envId=leetcode-75
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let sum = 0;
  let total = 0;
  let sumHash = { 0: 1 };

  const preorderSum = (root) => {
    if (!root) return;

    sum += root.val;
    const diff = sum - targetSum;

    if (sumHash[diff]) {
      total += sumHash[diff];
    }

    sumHash[sum] = (sumHash[sum] || 0) + 1;

    preorderSum(root.left);
    preorderSum(root.right);

    sumHash[sum]--;
    sum -= root.val;
  };

  preorderSum(root);

  return total;
};

/**
 * DFS - Preorder
 *
 * pathSum: sum of all values from current node to root
 * map(pathSum - targetSum): frequency of targetSum in the path (up to current node)
 *
 * Case 1: valid tree path sum that starts from the root node
 *          - pathSum === targetSum
 *             => increment output by 1
 * Case 2: valid tree path sum that starts middle of the tree
 *          - check for frequency of target sum in the current path
 *             * if True, it means that we found targetSum
 *                * map[pathSum - targetSum] number of times
 *             => increment output by frequency of map(pathSum - targetSum)
 * *Time: O(N)
 * *Space: O(N)
 */
// Runtime: 134 ms, faster than 51.52% of JavaScript online submissions for Path Sum III.
// Memory Usage: 47.5 MB, less than 12.82% of JavaScript online submissions for Path Sum III.
const pathSum = (root, targetSum) => {
  let output = 0;
  let map = {};

  const traverse = (root, pathSum) => {
    if (!root) return null;

    pathSum += root.val; // current path sum

    // Case 1: starts from root node
    if (pathSum === targetSum) output++;

    // Case 2: starts from middle of tree
    // frequency of targetSum in the current path (up to current node)
    if (map[pathSum - targetSum]) output += map[pathSum - targetSum];

    // memoize current path sum (root to current node) and it's frequency
    if (map[pathSum]) map[pathSum]++;
    else map[pathSum] = 1;

    if (root.left) traverse(root.left, pathSum);
    if (root.right) traverse(root.right, pathSum);

    // remove the current path sum
    // to note that path is not available/visited
    map[pathSum]--;
  };

  traverse(root, 0);
  return output;
};
