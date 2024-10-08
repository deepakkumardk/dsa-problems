/**
 * 136. single-number
 * https://leetcode.com/problems/single-number/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const res = nums.reduce((acc, curr) => acc ^ curr, 0);

  return res;
};
