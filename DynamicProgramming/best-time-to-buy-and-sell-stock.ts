function maxProfit(prices: number[]): number {
  let bestPrice = 0;
  const calc = (price: number) => {
    if (price > bestPrice) {
      bestPrice = price;
    }
  };

  for (let index = 0; index < prices.length; index++) {
    const stock = prices[index];
    const max = Math.max(...prices.slice(index + 1, prices.length));
    if (max > stock) {
      calc(max - stock);
    } else {
      calc(0);
    }
  }
  return bestPrice;
}
