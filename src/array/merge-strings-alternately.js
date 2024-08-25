/**
 * 1768. merge-strings-alternately
 * https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
export const mergeAlternately = function (word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;

  const smallerLength = len1 > len2 ? len2 : len1;
  let result = "";

  for (let i = 0; i < smallerLength; i++) {
    result += (word1?.[i] || "") + (word2?.[i] || "");
    if (i == smallerLength - 1) {
      if (len1 > len2) {
        result += word1.substring(i + 1);
      } else if (len2 > len1) {
        result += word2.substring(i + 1);
      }
    }
  }

  return result;
};
