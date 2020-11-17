function minInsertions(s: string): number {
  let cnt = 0;
  const leftIndexes = new Map<number, number>();
  let rightIndexes = new Map<number, number>();
  for (let index = 0; index < s.length; index++) {
    if (s[index] === "(") {
      leftIndexes.set(index, index);
    } else {
      rightIndexes.set(index, index);
    }
  }
  const arr = [...leftIndexes.values()];
  let index = arr.length - 1;
  while (index >= 0) {
    const item = arr[index];
    if (rightIndexes.size === 0) {
      cnt += 2;
    } else {
      // @ts-ignore
      if (rightIndexes.has(item + 1) && rightIndexes.has(item + 2)) {
        // @ts-ignore
        rightIndexes.delete(item + 1);
        // @ts-ignore
        rightIndexes.delete(item + 2);
        // @ts-ignore
      } else if (rightIndexes.has(item + 1)) {
        // @ts-ignore
        rightIndexes.delete(item + 1);
        cnt++;
      } else {
        let count = 0;
        if (leftIndexes.has(item + 1)) {
          for (let ind = arr[index + 1]; ind < arr[index + 2]; ind++) {
            if (rightIndexes.has(ind)) {
              rightIndexes.delete(ind);
              count++;
            }
            if (count === 2) {
              break;
            }
          }
        }
        if (count === 0) {
          cnt += 2;
        } else if (count === 1) {
          cnt++;
        }
      }
    }
    index--;
  }
  if (rightIndexes.size === 0) {
    return cnt;
  }
  if (rightIndexes.size % 2 === 0) {
    return cnt + rightIndexes.size / 2;
  } else {
    return cnt + Math.floor(rightIndexes.size / 2) + 2;
  }
}

// public int minInsertions(String s) {
//         int res = 0, left = 0;
//         for (int i = 0; i < s.length(); i++) {
//             if (s.charAt(i) == '(') { // when (
//                 left++;
//             } else if (i == s.length() - 1 || s.charAt(i + 1) == '(') { // when single )
//                 if (left > 0) {
//                     res++;
//                     left--;
//                 } else {
//                     res += 2;
//                 }
//             } else { // when double )
//                 if (left > 0) left--;
//                 else res++;
//                 i++; // advance pointer since we have process double ) in a time
//             }
//         }
//         res += left * 2;
//         return res;
//     }
