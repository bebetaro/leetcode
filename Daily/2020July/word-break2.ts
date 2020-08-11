function wordBreak(
  s: string,
  wordDict: string[],
  ans: string = "",
  map: Map<string, string[]> = new Map()
): string[] {
  if (s.length === 0) {
    return [ans.trim()];
  }
  if (map.has(s)) {
    return map.get(s) || [];
  }

  if (s.length > 100) {
    const set = new Set(s);
    const dict = new Set(wordDict.join(""));
    if (set.size > dict.size) {
      return [];
    }
  }

  const arr = wordDict.filter((item) => item === s.slice(0, item.length));
  if (arr.length === 0) {
    return [];
  }
  const final: string[] = [];
  for (const item of arr) {
    if (item.length > s.length) continue;
    const next = ans + `${item} `;
    const res = wordBreak(s.slice(item.length), wordDict, next);
    if (res.length > 0) {
      final.push(...res);
    }
  }
  map.set(s, final);
  return final;
}
