/**
 * 238. product-of-array-except-self
 * https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * Use the prefix and postfix array and multiply them to get the result
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let lastPrefixMultiply = 1;
  const productArray = new Array(nums.length).fill(1);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      productArray[i] = 1;
    } else {
      productArray[i] = nums[i + 1] * productArray[i + 1];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    let iPrefix = 1;
    if (i === 0) {
      iPrefix = 1;
    } else {
      iPrefix = nums[i - 1] * lastPrefixMultiply;
    }
    lastPrefixMultiply = iPrefix;
    productArray[i] = iPrefix * productArray[i];
  }

  return productArray;
};
