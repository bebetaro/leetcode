function mincostTickets(days: number[], costs: number[]): number {
  const dp: number[] = Array(days.length + 1).fill(Infinity);
  dp[0] = 0;
  for (let index = 1; index <= days.length; index++) {
    dp[index] = Math.min(
      dp[index],
      dp[index - 1] + costs[0],
      dp[index - 1] + costs[1],
      dp[index - 1] + costs[2]
    );
    if (days[index - 1] > 6) {
      const idx = binarySearch(days.slice(0, index), days[index - 1] - 7);
      dp[index] = Math.min(dp[index], dp[idx] + costs[1]);
    }
    if (days[index - 1] > 29) {
      const idx = binarySearch(days.slice(0, index), days[index - 1] - 30);
      dp[index] = Math.min(dp[index], dp[idx] + costs[2]);
    }
    if (days[index - 1] < 7) {
      dp[index] = Math.min(dp[index], costs[1]);
    }
    if (days[days.length - 1] < 30) {
      dp[index] = Math.min(dp[index], costs[2]);
    }
  }

  return dp[dp.length - 1];
}

const binarySearch = (arr: number[], target: number): number => {
  let high = arr.length - 1;
  let low = 0;
  while (low < high) {
    const mid = Math.floor((high + low) / 2);
    if (arr[mid] > target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return high;
};
