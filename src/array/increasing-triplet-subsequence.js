/**
 * 334. increasing-triplet-subsequence
 * https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * Use the prefix and postfix array and multiply them to get the result
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  const rightMax = new Array(nums.length).fill(1);

  let iLeftMin = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    const current = nums[i];
    if (i == nums.length - 1) {
      rightMax[i] = current;
    } else {
      rightMax[i] = Math.max(current, rightMax[i + 1]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (i == 0) {
      iLeftMin = current;
    } else {
      iLeftMin = Math.min(iLeftMin, current);
    }

    if (iLeftMin < nums[i] && nums[i] < rightMax[i]) {
      return true;
    }
  }

  return false;
};
