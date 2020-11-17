function numOfSubarrays(arr: number[]): number {
  const ans: number[][] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const subArray = arr.slice(i, j + 1);
      ans.push(subArray);
    }
  }
  let sum: number[] = [];
  for (let k = 0; k < ans.length; k++) {
    const sumed = ans[k].reduce((pre, cur) => pre + cur);
    sum.push(sumed);
  }
  const mod = Math.pow(10, 9) + 7;
  return sum.filter((num) => num % 2 === 1).length % mod;
}

// https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/discuss/755033/Java-Simple-One-Pass-DP-O(1)-space

// 奇数を加えると、それまでの合計が逆転する　=> それまで偶数だったものに奇数を加えると奇数に、奇数だったものに奇数を加えると偶数になる
// よって奇数と偶数の合計値を逆転させる。偶数は変化しないためそのまま。
// その他に自身を加えるため、各工程ともに+1がなされる
// if current element is odd:
// adding it will change the parity of previous sum, so we swap previous odd and even, then odd increments 1 (the current element itself).

// if curr element is even:
// adding it will not change the parity of previous sum, so odd and even keep unchanged, then even increments 1 (the current element iteslf).

// https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/discuss/754721/C%2B%2BPython-7-line-Intuitive-Constant-Space-DP

// class Solution {
// public:
//     int numOfSubarrays(vector<int>& arr) {
//         int res = 0, odd = 0, even = 0;
//         for (auto x: arr) {
// とりあえずevenを１増やす
//             even += 1;
//             if (x % 2)
// もし奇数であれば、oddとevenの値を入れ替える
// これにより偶数時はoddの値は変わらない、奇数時はoddが１増えて、evenにoddの値が入ることが実現する
//                 swap(odd, even);
// 合計にoddを加える
//             res = (res + odd) % 1000000007;
//         }
//         return res;
//     }
// };

// https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/discuss/754702/Some-hints-to-help-you-solve-this-problem-on-your-own

// const int mod = 1e9 + 7;

// class Solution {
// public:
//     int numOfSubarrays(vector<int>& a) {
//         int n = a.size();

// 配列の各値を1と0にしている
//         for(auto &ele : a)
//             ele %= 2;
// ゼロと1のdp配列を用意する
//         vector<int> dp_zero(n), dp_one(n);
// もし配列の最後が偶数ならdp_zeroの最後に1を追加、奇数ならdp_oneに1追加
// 逆向きdpだから初期値を設定してる
//         if(a[n - 1] == 0)
//             dp_zero[n - 1] = 1;
//         else
//             dp_one[n - 1] = 1;

//         for(int i = n - 2; i >= 0; i--)
//         {
//             if(a[i] == 1)
//             {
//                 dp_one[i] = (1 + dp_zero[i + 1])%mod;

//                 dp_zero[i] = dp_one[i + 1];
//             }

//             if(a[i] == 0)
//             {
//                 dp_zero[i] = (1 + dp_zero[i + 1])%mod;

//                 dp_one[i] = dp_one[i + 1];
//             }

//         }

//         int sum = 0;
//         for(auto ele : dp_one)
//             sum += ele, sum %= mod;

//         return sum;

//     }
// };
