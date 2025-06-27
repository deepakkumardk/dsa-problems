/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  const mergedArr = [];

  while (i < nums1.length || j < nums2.length) {
    if (nums1[i] != undefined && nums2[j] != undefined) {
      console.log("sd");
      if (nums1[i] < nums2[j]) {
        mergedArr.push(nums1[i]);
        i++;
      } else {
        mergedArr.push(nums2[j]);
        j++;
      }
    } else if (nums1[i] !== undefined) {
      console.log("i", i);
      mergedArr.push(...nums1.slice(i, nums1.length));
      break;
    } else if (nums2[j] !== undefined) {
      console.log("j", j);
      mergedArr.push(...nums2.slice(j, nums2.length));
      break;
    }
  }

  const mid = Math.floor(mergedArr.length / 2);
  if (mergedArr.length % 2 === 0) {
    console.log(mergedArr, mergedArr[mid]);
    return (mergedArr[mid] + mergedArr[mid - 1]) / 2;
  } else {
    return mergedArr[mid];
  }
};

// findMedianSortedArrays([0,0],[0,0])
