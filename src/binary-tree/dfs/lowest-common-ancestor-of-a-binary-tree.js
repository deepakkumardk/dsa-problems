/**
 * 236. lowest-common-ancestor-of-a-binary-tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const stackP = [];
  const stackQ = [];
  let temp = [];
  let lca = root.val;

  if (root.val === p.val) {
    return p;
  } else if (root.val === q.val) {
    return q;
  }

  const makeStackForNode = (node) => {
    if (!node) return;

    temp.push(node);
    if (node.val === p.val) {
      isFound = true;
      stackP.push(...temp);
    } else if (node.val === q.val) {
      isFound = true;
      stackQ.push(...temp);
    }

    makeStackForNode(node.left);
    makeStackForNode(node.right);

    if (node.val !== p.val || node.val !== q.val) {
      temp.pop();
    }
  };

  temp.push(root);
  makeStackForNode(root.left);
  temp = [];
  temp.push(root);
  makeStackForNode(root.right);

  for (let i = 0; i < stackP.length; i++) {
    if (stackP[i] === stackQ[i]) {
      lca = stackP[i];
    } else {
      break;
    }
  }

  return lca;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let lca = null;

  const post_order = (node) => {
    if (!node) {
      return false;
    }

    const left = post_order(node.left);
    const right = post_order(node.right);

    const mid = node === p || node === q;

    if ((mid && left) || (mid && right) || (left && right)) {
      lca = node;
    }

    return mid || left || right;
  };

  post_order(root);
  return lca;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === p || root === q || root === null) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;
  return left || right;
};
