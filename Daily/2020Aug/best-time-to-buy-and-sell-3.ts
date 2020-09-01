function maxProfit(prices: number[]): number {
  if (prices.length < 2) {
    return 0;
  }
  const dp: number[][] = [];
  for (let index = 0; index < prices.length; index++) {
    const element = [0, 0];
    dp.push(element);
  }
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      dp[j][0] = Math.max(prices[j] - prices[i], dp[j][0], dp[j - 1][0]);
      if (i >= 2) {
        dp[j][1] = Math.max(
          prices[j] - prices[i] + dp[i - 1][0],
          dp[j][1],
          dp[j - 1][1]
        );
      }
    }
  }

  return Math.max(dp[dp.length - 1][0], dp[dp.length - 1][1]);
}

// 左側からと右側から各項における値を計算して、それらの和による最大値を求める
// [3,3,5,0,0,3,1,4]ここで仮に[3,3,5]と[0,0,3,1,4]と分けるのが答えの考え方
// この時、左の配列と右の配列を足し合わせると、その項で左と右に分けた時の和と考えることができる
// したがって、足し合わせた値の最大こそが与えられた配列における最大の組み合わせとなる
function maxProfit2(prices: number[]): number {
  const left = new Array(prices.length).fill(0);
  const right = new Array(prices.length).fill(0);
  let min = prices[0];
  let max = prices[prices.length - 1];
  for (let index = 1; index < prices.length; index++) {
    left[index] = Math.max(prices[index] - min, left[index - 1]);
    right[prices.length - 1 - index] = Math.max(
      max - prices[prices.length - 1 - index],
      right[prices.length - index]
    );
    min = Math.min(min, prices[index]);
    max = Math.max(max, prices[prices.length - 1 - index]);
  }

  let res = 0;

  for (let index = 0; index < prices.length; index++) {
    res = Math.max(left[index] + right[index], res);
  }

  return res;
}
