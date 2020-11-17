function restoreString(s: string, indices: number[]): string {
  const ans = Array(s.length);
  for (let index = 0; index < s.length; index++) {
    const idx = indices[index];
    ans[idx] = s[index];
  }
  return ans.join("");
}
