/**
 * 1679. max-number-of-k-sum-pairs
 * https://leetcode.com/problems/max-number-of-k-sum-pairs/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * Two pointers with step ahead left when sum is min else right one
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);

  let i = 0;
  let j = nums.length - 1;
  let count = 0;

  while (i < j) {
    const sum = nums[i] + nums[j];

    if (sum === k) {
      i++;
      j--;
      count++;
    } else if (sum < k) {
      i++;
    } else {
      j--;
    }
  }

  return count;
};
