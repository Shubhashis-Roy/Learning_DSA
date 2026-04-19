// Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

//  O(N*N)
var maxProfit1 = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let diff = prices[j] - prices[i];
      if (profit < diff) {
        profit = prices[j] - prices[i];
      }
    }
  }

  return profit;
};

// O(N)
var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    }

    if (profit < prices[i] - min) {
      profit = prices[i] - min;
    }
  }

  return profit;
};

// let prices = [7, 1, 5, 3, 6, 4];
let prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
