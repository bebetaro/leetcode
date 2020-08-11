fn main() {
  pub fn my_pow(x: f64, n: i32) -> f64 {
    // power = 2**10 => 2**5 * 2**5
    // 2**5 => 2**2 * 2**2 * 2**1
    // 2**2 => 2*2
    // という具合に分解していくのを表している
    // fn recursive(_x: f64, _n: i64) -> f64 {
    //   if _n == 1 {
    //     return _x;
    //   }
    //   if _n % 2 == 0 {
    //     recursive(_x, _n / 2) * recursive(_x, _n / 2)
    //   } else {
    //     recursive(_x, _n / 2) * recursive(_x, _n / 2) * _x
    //   }
    // }
    let mut power: i64 = n.into();
    let mut xx = x;
    if n == 0 {
      return 1.0;
    }
    if power < 0 {
      power = -power
    }
    // let ans = recursive(x, power);
    let mut ans = 1.0;
    while power > 0 {
      // 奇数の時にはansに代入する
      // 10:1010, 9:1001のようにタイミングでx倍値は異なる
      // 1の位置をxxを回すことで見出している
      // bitwise的には上記はどちらもx**4 * x**4 = x**8だが、
      // 残りの指数分を得るために奇数時にansにxxを入れている
      if power & 1 == 1 {
        ans *= xx;
      }
      xx *= xx;
      power >>= 1;
    }

    if n < 0 {
      1.0 / ans
    } else {
      ans
    }
  }
}
