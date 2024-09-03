/**
 * 11. container-with-most-water
 * https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * Use the double pointer left, right & step ahead the pointer which is minimum
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let _maxArea = 0;
  while (i < j) {
    const area = Math.min(height[i], height[j]) * (j - i);
    if (area > _maxArea) {
      _maxArea = area;
    }
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }

  return _maxArea;
};
