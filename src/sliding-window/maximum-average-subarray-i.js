/**
 * 643. maximum-average-subarray-i
 * https://leetcode.com/problems/maximum-average-subarray-i/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let maxAverage = -Infinity;
  let lastSum = 0;

  for (let i = 0; i < nums.length - k + 1; i++) {
    if (i === 0) {
      lastSum = nums.slice(i, i + k).reduce((acc, current) => acc + current, 0);
    } else {
      lastSum = lastSum - nums[i - 1] + nums[i + k - 1];
    }
    const average = lastSum / k;

    if (average > maxAverage) {
      maxAverage = average;
    }
  }

  return maxAverage;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = 0;
  let window = 0;

  for (let i = 0; i < k; i++) {
    window += nums[i];
  }

  max = window / k;

  for (let i = k; i < nums.length; i++) {
    window -= nums[i - k];
    window += nums[i];
    max = Math.max(max, window / k);
  }

  return max;
};
