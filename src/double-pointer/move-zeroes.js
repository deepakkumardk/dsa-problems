/**
 * 283. move-zeroes
 * https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  let j = 0;

  while (i < nums.length) {
    if (nums[i] == 0) {
      while (nums[j] == 0) {
        j++;
      }

      if (j > nums.length - 1) return;

      if (j >= nums.length - 1 && nums[j] == 0) {
        return nums;
      }
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      if (j == nums.length - 1 && nums[j] == 0) {
        return nums;
      }
    } else {
      i++;
      j++;
    }
  }

  return nums;
};

var moveZeroes = function (nums) {
  let low = 0;
  let high = low + 1;

  while (high <= nums.length - 1) {
    if (nums[low] !== 0) {
      low++;
      high++;
    } else {
      if (nums[high] !== 0) {
        [nums[low], nums[high]] = [nums[high], nums[low]];
        low++;
      }
      high++;
    }
  }
};
