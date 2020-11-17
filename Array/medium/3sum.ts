/**
 * original
 */
// function threeSum(nums: number[]): number[][] {
//   if (nums.length === 0) {
//     return [];
//   }
//   const arr = [];
//   const map = new Map<number, number[]>();
//   const sMap = new Map<string, string>();
//   for (let index = 0; index < nums.length; index++) {
//     if (map.has(nums[index])) {
//       const num = map.get(nums[index]) || [];
//       num.push(index);
//       map.set(nums[index], num);
//     } else {
//       map.set(nums[index], [index]);
//     }
//   }
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       const z = 0 - (nums[i] + nums[j]);
//       if (!map.has(z)) continue;
//       const s = [nums[i], nums[j], z].sort((a, b) => a - b);
//       if (sMap.has(`${s[0]}|${s[1]}|${s[3]}`)) continue;
//       const idxs = (map.get(z) || []).filter(
//         (item) => item !== i && item !== j
//       );
//       if (idxs.length > 0) {
//         arr.push([nums[i], nums[j], z]);
//         sMap.set(`${s[0]}|${s[1]}|${s[3]}`, "Done");
//       }
//     }
//   }
//   return arr;
// }

// two pointer
function threeSum(nums: number[]): number[][] {
  if (nums.length === 0) {
    return [];
  }
  nums.sort((a, b) => a - b);
  const arr = [];
  const map = new Map<string, string>();
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const s = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
      if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
      } else {
        if (!map.has(`${s[0]}|${s[1]}|${s[2]}`)) {
          arr.push([nums[i], nums[j], nums[k]]);
          map.set(`${s[0]}|${s[1]}|${s[2]}`, "Done");
        }
        j++;
        k--;
      }
    }
  }
  return arr;
}
