/**
 * 1657. determine-if-two-strings-are-close
 * https://leetcode.com/problems/determine-if-two-strings-are-close/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  const occCount1 = {};
  const occCount2 = {};

  for (let i = 0; i < word1.length; i++) {
    const char = word1[i];
    if (occCount1[char]) {
      occCount1[char] += 1;
    } else {
      occCount1[char] = 1;
    }
  }

  for (let i = 0; i < word2.length; i++) {
    const char = word2[i];
    if (occCount2[char]) {
      occCount2[char] += 1;
    } else {
      occCount2[char] = 1;
    }
  }

  const valuesArr1 = Object.values(occCount1).sort((a, b) => a - b);
  const valuesArr2 = Object.values(occCount2).sort((a, b) => a - b);

  const hasEqualChars =
    [...new Set(word1.split(""))].sort().join() ===
    [...new Set(word2.split(""))].sort().join();

  const isEqual = JSON.stringify(valuesArr1) === JSON.stringify(valuesArr2);

  return isEqual && hasEqualChars;
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length != word2.length) return false;

  if (word1 == word2) return true;

  let arr1 = Array(26).fill(0);
  let arr2 = Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    arr1[word1.charCodeAt(i) - 97]++;
    arr2[word2.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
    if (arr1[i] > 0 && arr2[i] == 0) return false;
    if (arr2[i] > 0 && arr1[i] == 0) return false;
  }

  let str1 = arr1.sort().join("");
  let str2 = arr2.sort().join("");

  return str1 == str2;
};
