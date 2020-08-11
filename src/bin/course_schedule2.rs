fn main() {
  pub fn find_order(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> Vec<i32> {
    let mut vec: Vec<i32> = vec![];
    if prerequisites.len() == 0 {
      for i in 0..num_courses {
        vec.push(num_courses - i - 1);
      }
      return vec;
    }

    let mut dp: Vec<Vec<i32>> = vec![vec![]; 10];

    for item in prerequisites.iter() {
      let cur = item[0];
      let pre = item[1];
      match (
        vec.iter().position(|&x| x == cur),
        vec.iter().position(|&y| y == pre),
      ) {
        (Some(x), Some(y)) => {
          if x > y {
            continue;
          }
          let mut index = -1;
          if dp[x].len() == 0 {
            index = y as i32 + 1;
          } else {
            let ddp = dp[x].iter().cloned();
            for i in ddp {
              index = index.max(vec.iter().position(|&z| z == i).unwrap() as i32);
            }
            index += 1;
          }

          if index >= vec.len() as i32 {
            vec.push(cur);
          } else {
            vec.remove(x);
            vec.insert(index as usize, cur);
          }
        }
        (Some(x), None) => {
          vec.insert(x, pre);
        }
        (None, Some(x)) => {
          vec.insert(x + 1, cur);
        }
        (None, None) => {
          vec.push(pre);
          vec.push(cur);
        }
      }
      let i = vec.iter().position(|&x| x == cur).unwrap();
      dp[i].push(pre);
    }

    for item in prerequisites.iter() {
      let big = vec.iter().position(|&x| x == item[0]).unwrap();
      let small = vec.iter().position(|&y| y == item[1]).unwrap();
      if small > big {
        vec.clear();
        return vec;
      }
    }

    if num_courses > vec.len() as i32 {
      let leng = vec.len() as i32;
      let diff = num_courses - leng;
      let mut v2: Vec<i32> = vec![];
      let mut v3 = vec.clone();
      v3.sort();
      for j in 0..diff {
        let mut index = leng + diff - 1 - j;
        for k in 0..leng {
          if k != v3[k as usize] {
            index = k;
            break;
          }
        }
        v2.push(index);
      }
      v2.append(&mut vec);
      return v2;
    }
    vec
  }
}
