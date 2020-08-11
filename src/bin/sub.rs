fn main() {
  pub fn num_of_subarrays(arr: Vec<i32>) -> i32 {
    let mut ans: Vec<i32> = vec![];
    for i in 0..arr.len() {
      for j in i..arr.len() {
        let sub_array = &arr[i..j + 1];
        let sum = sub_array.iter().sum::<i32>();
        if sum % 2 == 1 {
          ans.push(sum);
        }
      }
    }
    let mo = 10i32.pow(9) + 7;
    let length = ans.len() as i32;
    length % mo
  }
}
