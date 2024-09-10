/**
 * 724. find-pivot-index
 * https://leetcode.com/problems/find-pivot-index/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const rightPrefixSum = [];
  let lastLeftPrefixSum = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    rightPrefixSum[i] = (rightPrefixSum[i + 1] || 0) + (nums[i + 1] || 0);
  }

  for (let i = 0; i < nums.length; i++) {
    lastLeftPrefixSum = lastLeftPrefixSum + (nums[i - 1] || 0);

    if (lastLeftPrefixSum === rightPrefixSum[i]) {
      return i;
    }
  }

  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum = 0;
  let rightSum = 0;
  let index = -1;
  for (let i = 0; i < nums.length; i++) {
    rightSum += nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    rightSum -= nums[j];
    if (leftSum == rightSum) {
      index = j;
      break;
    }
    leftSum += nums[j];
  }
  return index;
};
