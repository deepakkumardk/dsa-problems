/**
 * 875. koko-eating-bananas
 * https://leetcode.com/problems/koko-eating-bananas/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  const maxNum = [...piles].sort((a, b) => b - a)[0];
  let k = maxNum;

  const calculateSpeed = (factor) => {
    const res = piles.reduce((acc, curr) => acc + Math.ceil(curr / factor), 0);
    return res;
  };

  let left = 0;
  let right = maxNum - 1;
  let mid;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);

    const speed = calculateSpeed(mid);
    if (speed <= h) {
      k = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return k;
};
