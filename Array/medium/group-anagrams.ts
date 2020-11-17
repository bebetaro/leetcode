function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (let index = 0; index < strs.length; index++) {
    const word = strs[index];
    const key = strs[index].split("").sort().join("");
    const item = map.get(key) || [];
    item.push(word);
    map.set(key, item);
  }
  return [...map.values()];
}
