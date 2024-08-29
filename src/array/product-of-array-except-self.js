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
  const prefixArray = new Array(nums.length).fill(1);
  const postfixArray = new Array(nums.length).fill(1);
  const productArray = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefixArray[i] = 1;
    } else {
      prefixArray[i] = nums[i - 1] * prefixArray[i - 1];
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      postfixArray[i] = 1;
    } else {
      postfixArray[i] = nums[i + 1] * postfixArray[i + 1];
    }
  }
  for (let i = 0; i < productArray.length; i++) {
    productArray[i] = prefixArray[i] * postfixArray[i];
  }

  return productArray;
};
