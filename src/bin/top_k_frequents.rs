fn main() {
  pub fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
    //      pub fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
    //   if nums.is_empty() {
    //             return vec![];
    //         }
    //         let mut counts: HashMap<i32, usize> = HashMap::new();
    //         for n in nums {
    //             *counts.entry(n).or_insert(0) += 1;
    //         }
    //         let mut tuples: Vec<(&i32, &usize)> = counts.iter().collect();
    //         tuples.sort_by_key(|t| Reverse(t.1));
    //         return tuples.iter().map(|t| *t.0).take(k as usize).collect();
    //     }
    // }use std::cmp::Reverse;
    // use std::collections::BinaryHeap;
    // use std::collections::HashMap;

    // type Pair = (Reverse<usize>, i32);

    use std::collections::HashMap;
    let mut map: HashMap<i32, i32> = HashMap::new();
    for i in nums.iter() {
      match map.get(i) {
        Some(x) => map.insert(*i, x + 1),
        None => map.insert(*i, 1),
      };
    }
    let mut vec: Vec<i32> = vec![];
    let mut temp = (0, 0);
    for _ in 0..k {
      for key in map.keys() {
        let val: i32 = match map.get(key) {
          Some(x) => *x,
          _ => 0,
        };
        if val > temp.1 {
          temp = (*key, val);
        }
      }
      vec.push(temp.0);
      map.insert(temp.0, 0);
      temp = (0, 0);
    }
    vec
  }
}
