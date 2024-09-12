/**
 * 1207. unique-number-of-occurrences
 * https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr = []) {
  const occCount = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (occCount[num]) {
      occCount[num] = occCount[num] + 1;
    } else {
      occCount[num] = 1;
    }
  }

  const valuesArr = Object.values(occCount);
  const valuesSet = new Set(valuesArr);

  return valuesArr.length === valuesSet.size;
};
