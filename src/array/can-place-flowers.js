/**
 * 605. can-place-flowers
 * https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  for (let index = 0; index < flowerbed.length; index += 1) {
    const element = flowerbed[index];
    const prev = flowerbed[index - 1] || 0;
    const next = flowerbed[index + 1] || 0;
    if (element === 0 && prev === 0 && next === 0) {
      count++;
      flowerbed[index] = 1;
    }
  }
  return count >= n;
};
