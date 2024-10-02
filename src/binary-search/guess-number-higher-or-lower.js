/**
 * 374. guess-number-higher-or-lower
 * https://leetcode.com/problems/guess-number-higher-or-lower/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  const res = guess(n);
  if (res === 0) {
    return n;
  } else if (res === 1) {
    return guessNumber(++n);
  } else if (res === -1) {
    return guessNumber(--n);
  }
};
