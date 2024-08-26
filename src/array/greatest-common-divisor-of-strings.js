/**
 * 1071. greatest-common-divisor-of-strings
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

const isRepeatingWith = (str, repeatingWord) => {
  if (!repeatingWord) return "";
  const lengthDivisor = str.length / repeatingWord.length;

  if (repeatingWord.repeat(lengthDivisor) === str) {
    return repeatingWord;
  }
  return "";
};

const gcd = (num1, num2) => {
  let smallNum = num1 < num2 ? num1 : num2;

  while (smallNum > 0) {
    if (num1 % smallNum === 0 && num2 % smallNum === 0) {
      return smallNum;
    }
    smallNum--;
  }

  return 1;
};

export const gcdOfStrings = function (str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  const largerWord = len1 >= len2 ? str1 : str2;
  const smallerWord = len1 < len2 ? str1 : str2;

  const gcdNum = gcd(len1, len2);

  const smallerRepeatingWord = smallerWord.substring(0, gcdNum);

  const repeating1 = isRepeatingWith(smallerWord, smallerRepeatingWord);
  const repeating2 = isRepeatingWith(
    largerWord,
    largerWord.substring(0, gcdNum)
  );

  if (repeating1 && repeating2 && repeating1 === repeating2) {
    return smallerRepeatingWord;
  }

  return "";
};
