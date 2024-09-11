/**
 * 2215. find-the-difference-of-two-arrays
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  nums1 = [...new Set(nums1)].sort((a, b) => a - b);
  nums2 = [...new Set(nums2)].sort((a, b) => a - b);

  const answer1 = [];
  const answer2 = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    const n1 = nums1[i];
    const n2 = nums2[j];

    if (n1 < n2) {
      answer1.push(n1);
      i++;
    } else if (n1 > n2) {
      answer2.push(n2);
      j++;
    } else {
      i++;
      j++;
    }
  }
  answer1.push(...nums1.splice(i));
  answer2.push(...nums2.splice(j));

  return [answer1, answer2];
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let ans1 = [...set1].filter((e) => !set2.has(e));
  let ans2 = [...set2].filter((e) => !set1.has(e));

  return [ans1, ans2];
};
