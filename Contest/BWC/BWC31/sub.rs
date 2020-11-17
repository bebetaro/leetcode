impl Solution {
  pub fn num_of_subarrays(arr: Vec<i32>) -> i32 {
    let mut ans: Vec<Vec<i32>> = vec![];
    for i in 0..arr.len() {
      for j in i..arr.len() {
        let subArray = &arr[i..j + 1];
        ans.push(subArray);
      }
    }
    let mut ans2: Vec<i32> = vec![];
    for k in ans {
      let sum = k.iter().sum();
      if sum % 2 == 1 {
        ans2.push(sum);
      }
    }
    let mo = 10i32.powi(9) + 7;
    ans2.len() % mo
  }
}
