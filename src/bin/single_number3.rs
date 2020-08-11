fn main() {
  pub fn single_number(nums: Vec<i32>) -> Vec<i32> {
    use std::collections::HashSet;
    let mut seen: HashSet<i32> = HashSet::new();

    for i in nums {
      if seen.contains(&i) {
        seen.remove(&i);
      } else {
        seen.insert(i);
      }
    }

    seen.iter().cloned().collect()
  }
  // pub fn single_number(nums: Vec<i32>) -> Vec<i32> {
  //   use std::collections::HashMap;
  //   let mut map: HashMap<&i32, i32> = HashMap::new();
  //   let mut ans: Vec<i32> = vec![];
  //   if nums.len() == 0 {
  //     ans.push(0);
  //     ans.push(0);
  //     return ans;
  //   }
  //   for i in nums.iter() {
  //     let count = map.entry(i).or_insert(1);
  //     *count += 1;
  //   }
  //   for j in map.iter() {
  //     let index = **j.0;
  //     let val = *j.1;
  //     println!("{} {}", index, val);
  //     if val == 1 {
  //       ans.push(index)
  //     }
  //   }
  //   ans
  // }
}
