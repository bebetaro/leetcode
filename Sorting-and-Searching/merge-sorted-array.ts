/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let index = m; index < m + n; index++) {
    nums1[index] = nums2[index - m];
  }
  nums1.sort((a, b) => a - b);
}
