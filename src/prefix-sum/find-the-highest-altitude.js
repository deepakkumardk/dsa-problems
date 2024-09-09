/**
 * 1732. find-the-highest-altitude
 * https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * Use the prefix sum Algo
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  const prefixSum = [];
  let maxAltitude = 0;

  for (let i = 0; i < gain.length; i++) {
    prefixSum[i] = gain[i] + (prefixSum[i - 1] || 0);
    maxAltitude = Math.max(prefixSum[i], maxAltitude);
  }
  return maxAltitude;
};

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let initial = 0;

  let prev = 0;

  for (let i = 0; i < gain.length; i++) {
    prev += gain[i];
    if (prev > initial) {
      initial = prev;
    }
  }
  return initial;
};
