/**
 * 394. decode-string
 * https://leetcode.com/problems/decode-string/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var decodeString = function (chars) {
  const bracketCount = chars.filter((char) => char === "[");

  const res = chars;

  for (let i = 0; i < bracketCount; i++) {
    const regex = /(\d+)[\[(\w+)\]]/g;

    res = res.replace(regex, (_, c1, c2) => c2.repeat(c1));
  }

  return res;
};

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  let num = 0;
  let result = "";
  for (let c of s) {
    if (!isNaN(c)) {
      num = num * 10 + Number(c);
    } else if (c === "[") {
      stack.push(result);
      stack.push(num);
      num = 0;
      result = "";
    } else if (c === "]") {
      const prevNum = stack.pop();
      const prevResult = stack.pop();
      result = prevResult + result.repeat(prevNum);
    } else {
      result += c;
    }
  }
  return result;
};
