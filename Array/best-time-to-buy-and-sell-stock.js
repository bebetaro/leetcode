/**
 * @param {number[]} prices
 * @return {number}
 */

// //  Brute force　=> Runtime Error
// const maxProfit = (prices) => {
//   const calculate = (prices, s) => {
//     if (s >= prices.length) {
//       return 0;
//     }
//     let max = 0;
//     for (let start = 0; start < prices.length; start++) {
//       let maxProfit = 0;
//       for (let i = start + 1; i < prices.length; i++) {
//         if (prices[i] > prices[start]) {
//           let profit = calculate(prices, i + 1) + prices[i] - prices[start];
//           if (profit > maxProfit) {
//             maxProfit = profit;
//           }
//         }
//       }
//       if (maxProfit > max) {
//         max = maxProfit;
//       }
//     }
//     return max;
//   };
//   return calculate(prices, 0);
// };

// Peak-Valley
const maxProfit = (prices) => {
  let i = 0;
  let valley = 0;
  let max = 0;

  while (i < prices.length - 1) {
    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) i++;
    valley = prices[i];
    while (i < prices.length - 1 && prices[i] <= prices[i + 1]) i++;
    max += prices[i] - valley;
  }

  return max;

  // slow way
  // let valley = 0;
  // let isTransaction = false;
  // let maxProfit = 0;
  // prices.forEach((_, index) => {
  //   if (!isTransaction && index === prices.length - 1) {
  //   } else if (!isTransaction && prices[index] <= prices[index + 1]) {
  //     valley = prices[index];
  //     isTransaction = true;
  //   } else if (isTransaction && prices[index] >= valley) {
  //     maxProfit += prices[index] - valley;
  //     if (prices[index] <= prices[index + 1]) {
  //       valley = prices[index];
  //       isTransaction = true;
  //     } else {
  //       isTransaction = false;
  //     }
  //   }
  // });
};

// SimpleOnePass
const maxProfit = (prices) => {
  let maxprofit = 0;
  prices.forEach((_, i) => {
    const num = i + 1;
    if (prices[num] > prices[num - 1])
      maxprofit += prices[num] - prices[num - 1];
  });
  return maxprofit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
