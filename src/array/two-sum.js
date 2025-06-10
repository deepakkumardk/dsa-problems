/**
 * 1. two-sum
 * https://leetcode.com/problems/two-sum/description/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    const y = target - x;
    if (hashMap.has(y) && hashMap.get(y) !== i) {
      return [i, hashMap.get(y)];
    }
  }

  return [];
};
