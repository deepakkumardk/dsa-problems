/**
 * 345. reverse-vowels-of-a-string
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75
 */
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const isVowel = (char) => vowels.includes(char);
  const reverseStr = s.split("");
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    const leftChar = s[i];
    const rightChar = s[j];
    const isLeftVowel = isVowel(leftChar);
    const isRightVowel = isVowel(rightChar);

    if (isLeftVowel && isRightVowel) {
      reverseStr[i] = rightChar;
      reverseStr[j] = leftChar;
      i++;
      j--;
    } else if (isLeftVowel && !isRightVowel) {
      j--;
    } else if (!isLeftVowel && isRightVowel) {
      i++;
    } else if (!isLeftVowel && !isRightVowel) {
      i++;
      j--;
    }
  }

  return reverseStr.join("");
};
