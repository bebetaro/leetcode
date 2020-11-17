//https:leetcode.com/problems/minimum-cost-to-cut-a-stick/discuss/780920/Java-Detailed-Explanation-DFS%2BMemo-From-Naive-TLE-to-Accepted

// Accepted Implementation
// public int minCost(int n, int[] cuts) {

// 	return helper(cuts, new HashMap<>(), 0, n);
// }

// private int helper(int[] cuts, Map<String, Integer> memo, int l, int r) {

// 	int res = Integer.MAX_VALUE;

// 	String key = l + "-" + r;
// 	if (memo.containsKey(key)) return memo.get(key);

// 	for (int i = 0; i < cuts.length; ++i) {
// 		if (cuts[i] <= l || cuts[i] >= r) continue;

// 		int cost = r - l;
// 		res = Math.min(
// 		           // min cost of left stick + cost + min cost of right stick
// 				   helper(cuts, memo, l, cuts[i]) + cost + helper(cuts, memo, cuts[i], r),
// 				   res);
// 	}

// 	res = res == Integer.MAX_VALUE ? 0 : res;
// 	memo.put(key, res);

// 	return res;
// }

const findClosestMid = (target: number, arr: number[]): number => {
  arr.sort((a, b) => a - b);
  let min = 0;
  let high = arr.length - 1;
  while (min < high) {
    const mid = Math.floor(min + high / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid;
    } else {
      min = mid;
    }
  }
  return high;
};
