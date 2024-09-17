/**
 * 2352. equal-row-and-column-pairs
 * https://leetcode.com/problems/equal-row-and-column-pairs/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const colArray = [];
  let pairCount = 0;

  const isArrayEqual = (arr1, arr2) => {
    return arr1.join(",") === arr2.join(",");
  };
  // Hash the value stored in colArray

  for (let i = 0; i < grid.length; i++) {
    const column = [];
    for (let j = 0; j < grid.length; j++) {
      const value = grid[j][i];
      column.push(value);
    }
    colArray.push(column);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < colArray.length; j++) {
      if (isArrayEqual(grid[i], colArray[j])) {
        pairCount++;
      }
    }
  }

  return pairCount;
};
