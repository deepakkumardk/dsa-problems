/**
 * 1318. minimum-flips-to-make-a-or-b-equal-to-c
 * https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  const toBinary = (num) => {
    return (num >>> 0).toString(2);
  };
  const padZeroes = (str, len) => {
    return str.padStart(len, "0");
  };

  let aBin = toBinary(a);
  let bBin = toBinary(b);
  let cBin = toBinary(c);
  let count = 0;

  const maxLength = Math.max(aBin.length, bBin.length, cBin.length);

  aBin = padZeroes(aBin, maxLength);
  bBin = padZeroes(bBin, maxLength);
  cBin = padZeroes(cBin, maxLength);

  for (let i = maxLength - 1; i >= 0; i--) {
    const orRes = Number(aBin[i]) | Number(bBin[i]);
    if (orRes === Number(cBin[i])) {
      continue;
    } else {
      // 00 0 1
      if (aBin[i] === "0" && bBin[i] === "0") {
        count++;
      } else if (aBin[i] === "1" && bBin[i] === "1") {
        // 11 1 0
        count += 2;
      } else {
        // 01 1 0
        // 10 1 0
        count++;
      }
    }
  }

  return count;
};

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  var d = (a | b) ^ c;
  var e = a & b & ~c;
  var sum = 0;
  while (d) {
    sum += (d & 1) + (e & 1);
    d >>= 1;
    e >>= 1;
  }
  return sum;
};
