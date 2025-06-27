/**
 * 121. best-time-to-buy-and-sell-stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let maximumProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const profit = prices[i] - min;
    min = Math.min(min, prices[i]);
    maximumProfit = Math.max(maximumProfit, profit);
  }
  return maximumProfit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var profit = 0,
    buy = prices[0];

  for (var i = 1; i < prices.length; i++) {
    if (prices[i] > buy) {
      profit = Math.max(profit, prices[i] - buy);
    } else {
      buy = prices[i];
    }
  }

  return profit;
};
