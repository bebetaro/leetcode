function numSplits(s: string): number {
  let cnt = 0;
  for (let index = 1; index < s.length; index++) {
    const former = s.slice(0, index).split("");
    const latter = s.slice(index).split("");
    if (new Set(former).size === new Set(latter).size) {
      cnt++;
    }
  }
  return cnt;
}

// var numSplits = function (s) {
//   let set = new Set();

// 左から右へと右から左への配列
//   let l2r = new Array(s.length),
//     r2l = new Array(s.length);

// ユニークな値の数をカウントする
//   for (let i = 0; i < s.length; i++) {
//     set.add(s[i]);
//     l2r[i] = set.size;
//   }

//   set = new Set();
//   for (let i = s.length - 1; i >= 0; i--) {
//     set.add(s[i]);
//     r2l[i] = set.size;
//   }

// 左から右へは 0..i-1 までの配列、右から左へは i..s.length-1 の配列で比較だからi-1とiで比較する
//   let res = 0;
//   for (let i = 1; i < s.length; i++) {
//     if (l2r[i - 1] == r2l[i]) res++;
//   }
//   return res;
// };
