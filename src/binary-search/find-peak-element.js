/**
 * 162. find-peak-element
 * https://leetcode.com/problems/find-peak-element/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let max = -Infinity;
  let maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxIndex = i;
    }
  }

  return maxIndex;
};
