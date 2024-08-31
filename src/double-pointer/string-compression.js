/**
 * 443. string-compression
 * https://leetcode.com/problems/string-compression/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let lastChar = chars[0];
  let lastCharCount = 0;
  let result = [];
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    console.log(lastChar, char);
    if (lastChar == char) {
      lastCharCount++;
    } else {
      result.push(chars[i - 1]);
      if (lastCharCount != 1) {
        result.push(lastCharCount);
      }
      lastChar = char;
      lastCharCount = 1;
    }

    if (i == chars.length - 1) {
      result.push(lastChar);
      if (lastCharCount != 1) {
        result.push(lastCharCount);
      }
    }
  }
  const resStr = result.join("").split("");

  for (let i = 0; i < resStr.length; i++) {
    chars[i] = resStr[i];
  }
  chars.splice(resStr.length);

  return chars.length;
};
