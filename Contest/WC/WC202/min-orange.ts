function minDays(n: number): number {
  let days = 1;
  let lastDay: number[] = [];
  const first = [];
  if (n % 2 === 0) {
    first.push(n / 2);
  }
  if (n % 3 === 0) {
    first.push(n - 2 * (n / 3));
  }
  first.push(n - 1);
  for (let index = 0; index < first.length; index++) {
    n = Math.min(n, first[index]);
  }
  lastDay = first;

  while (n > 0) {
    days++;
    const thisDay = [];
    for (let index = 0; index < lastDay.length; index++) {
      let orange = lastDay[index] - 1;
      if (lastDay[index] % 2 === 0) {
        orange = Math.min(lastDay[index] / 2, orange);
      }
      if (lastDay[index] % 3 === 0) {
        orange = Math.min(lastDay[index] - 2 * (lastDay[index] / 3), orange);
      }
      thisDay.push(orange);
    }
    for (let index = 0; index < thisDay.length; index++) {
      n = Math.min(thisDay[index], n);
    }
    lastDay = thisDay;
  }
  return days;
}

// class Solution {
//     public int minDays(int n) {
//         Map<Integer, Integer> map = new HashMap<>();
//         map.put(1, 1);
//         map.put(2, 2);
//         map.put(3, 2);
//         return helper(n, map);
//     }

//     private int helper(int n, Map<Integer, Integer> map) {
//         if(map.containsKey(n)) return map.get(n);
//         int a = n;
//         if(n % 2 == 0) {
//             a = Math.min(a, 1 + helper(n / 2, map));
//         } else {
//             a = Math.min(a, 1 + helper(n - 1, map));
//         }
//         if(n % 3 == 0) {
//             a = Math.min(a, 1 + helper(n / 3, map));
//         } else if(n % 3 == 1) {
//             a = Math.min(a, 1 + helper(n - 1, map));
//         } else {
//             a = Math.min(a, 2 + helper(n - 2, map));
//         }
//         map.put(n, a);
//         return a;
//     }
// }
