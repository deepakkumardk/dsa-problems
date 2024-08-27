/**
 * 1431. kids-with-the-greatest-number-of-candies
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const maxNum = Math.max(...candies);

  return candies.map((num) => num + extraCandies >= maxNum);
};
