function maxProfit(prices: number[]): number {
  if (prices.length === 0 || prices.length === 1) {
    return 0;
  }
  let ans = Array(prices.length).fill(0);
  ans[0] = 0;
  ans[1] = Math.max(ans[1], prices[1] - prices[0]);
  for (let index = 2; index < prices.length; index++) {
    const num = prices[index];
    for (let j = index - 1; 0 <= j; j--) {
      if (j > 1) {
        ans[index] = Math.max(
          prices[index] - prices[j] + ans[j - 2],
          ans[index],
          ans[index - 1]
        );
      } else {
        ans[index] = Math.max(
          prices[index] - prices[j],
          ans[index],
          ans[index - 1]
        );
      }
    }
  }
  return ans[ans.length - 1];
}
