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
const guessNumber = (right, left = 1) => {
  const mid = ((left + right) / 2) << 0;
  switch (guess(mid)) {
    case 0:
      return mid;
    case -1:
      return guessNumber(mid - 1, left);
    case 1:
      return guessNumber(right, mid + 1);
  }
};
