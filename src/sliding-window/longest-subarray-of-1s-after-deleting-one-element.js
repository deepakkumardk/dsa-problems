/**
 * 1493. longest-subarray-of-1s-after-deleting-one-element
 * https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/?envType=study-plan-v2&envId=leetcode-75
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let maxWindowSize = 0;
  let zeroCount = 0;
  let i = 0;
  let j = 0;
  const k = 1;

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

  return maxWindowSize - 1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let left = 0;
  let result = 0;
  let countZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) countZero++;
    while (countZero > 1) {
      if (nums[left] === 0) countZero--;
      left++;
    }
    result = Math.max(result, i - left);
  }
  return result;
};
