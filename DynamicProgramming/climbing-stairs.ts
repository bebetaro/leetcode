// Brute Force
// function climbStairs(n: number): number {
//   const root = 0;
//   const answer = countTree(root, n);
//   return answer;
// }

// const countTree = (node: number | null, n: number): number => {
//   if (node > n) {
//     return 0;
//   }
//   if (node === n) {
//     return 1;
//   }
//   return countTree(node + 1, n) + countTree(node + 2, n);
// };

// Brute Force with Memo
// function climbStairs(n: number): number {
//   const root = 0;
//   const memo = Array(n).fill(0);
//   const answer = countTreeWithMemo(root, n, memo);
//   return answer;
// }

// const countTreeWithMemo = (
//   node: number,
//   n: number,
//   memo: Array<number>
// ): number => {
//   if (node > n) {
//     return 0;
//   }
//   if (node === n) {
//     return 1;
//   }
//   // 既に同じ値を算出していればそれを返す
//   if (memo[node] > 0) {
//     return memo[node];
//   }
//   // その値がまだなければ新たに算出する
//   memo[node] =
//     countTreeWithMemo(node + 1, n, memo) + countTreeWithMemo(node + 2, n, memo);
//   return memo[node];
// };

// DP法
function climbStairs(n: number): number {
  const dp = Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 2;
  for (let index = 2; index < dp.length; index++) {
    dp[index] = dp[index - 1] + dp[index - 2];
  }
  return dp[n - 1];
}
