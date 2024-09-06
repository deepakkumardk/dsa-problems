/**
 * 1456. maximum-number-of-vowels-in-a-substring-of-given-length
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = ["a", "e", "i", "o", "u"];
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      arr[i] = 1;
    } else {
      arr[i] = 0;
    }
  }

  let maxSum = arr.slice(0, k).reduce((acc, current) => acc + current, 0);
  let lastSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    let sum = 0;

    if (arr[i - k] === 1) {
      sum = lastSum + arr[i] - 1;
    } else {
      sum = lastSum + arr[i];
    }
    lastSum = sum;
    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = ["a", "e", "i", "o", "u"];
  let sum = 0;
  for (let i = 0; i < k; i += 1) {
    if (vowels.includes(s[i])) {
      sum += 1;
    }
  }
  let max = sum;
  for (let i = k; i < s.length; i += 1) {
    if (vowels.includes(s[i - k])) {
      sum -= 1;
    }
    if (vowels.includes(s[i])) {
      sum += 1;
    }
    max = Math.max(max, sum);
  }
  return max;
};
