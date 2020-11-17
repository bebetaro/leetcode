function getLengthOfOptimalCompression(s: string, k: number): number {
  const map = new Map<string, number>();
  for (const c of s) {
    const num = map.get(c) || 0;
    map.set(c, num + 1);
  }
  let newS = s;
  for (let index = 0; index < k; index++) {
    let minKey = "";
    let minVal = Infinity;
    let len = 0;
    for (const [key, value] of map) {
      if (`${key}${value}`.length > 2) {
        minKey = key;
      }else if(){
        
      }
    }

    const cIndex = newS.indexOf(minKey);
    newS = newS.slice(0, cIndex) + newS.slice(cIndex + 1);
    const cur = map.get(minKey) || 0;
    if (cur < 2) {
      map.delete(minKey);
    } else {
      map.set(minKey, cur - 1);
    }
  }
  let ans = "";
  const set = new Set(newS.split(""));
  for (const i of set) {
    const num = map.get(i) || 0;
    const item = `${i}${num === 1 ? "" : num}`;
    ans += item;
  }
  return ans.length;
}
