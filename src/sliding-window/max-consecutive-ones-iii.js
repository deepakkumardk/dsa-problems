/**
 * 1004. max-consecutive-ones-iii
 * https://leetcode.com/problems/max-consecutive-ones-iii/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * Dynamic window size with 2 pointer algo
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let maxWindowSize = 0;
  let zeroCount = 0;
  let i = 0;
  let j = 0;

  while (j < nums.length) {
    if (nums[j] === 1) {
      j++;
    } else {
      if (zeroCount < k) {
        zeroCount++;
        j++;
      } else {
        while (nums[i] != 0) {
          i++;
        }
        i++;
        zeroCount--;
      }
    }

    maxWindowSize = Math.max(j - i, maxWindowSize);
  }

  return maxWindowSize;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0,
    zerocount = 0,
    maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zerocount++;

    while (zerocount > k) {
      if (nums[left] === 0) zerocount--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};
