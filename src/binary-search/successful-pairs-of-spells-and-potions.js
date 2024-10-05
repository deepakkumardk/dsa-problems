/**
 * 2300. successful-pairs-of-spells-and-potions
 * https://leetcode.com/problems/successful-pairs-of-spells-and-potions/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  const pairs = [];

  potions.sort((a, b) => a - b);

  for (let i = 0; i < spells.length; i++) {
    let left = 0;
    let right = potions.length - 1;
    let mid;

    while (right >= left) {
      //  mid = left + Math.floor((right - left) / 2);
      mid = (left + right) >> 1;

      if (spells[i] * potions[mid] >= success) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    pairs.push(potions.length - left);
  }

  return pairs;
};
