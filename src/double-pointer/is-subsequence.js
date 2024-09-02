/**
 * 392. is-subsequence
 * https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!s.length) return true;

  let i = 0;

  for (let j = 0; j < t.length; j++) {
    if (s[i] === t[j]) {
      if (i === s.length - 1) {
        return true;
      }
      i++;
    }
  }
  return false;
};
