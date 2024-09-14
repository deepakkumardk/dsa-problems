/**
 * 2390. removing-stars-from-a-string
 * https://leetcode.com/problems/removing-stars-from-a-string/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "*") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};
