function maxDistance(position: number[], m: number): number {
  const map = new Map<number, number[][]>();
  position.sort((a, b) => a - b);
  for (let i = 0; i < position.length - 1; i++) {
    for (let j = i + 1; j < position.length; j++) {
      const num = Math.abs(position[i] - position[j]);
      const item = map.get(num) || [];
      if (item.length === 0) {
        item.push([position[i], position[j]]);
        map.set(num, item);
      } else {
        const last = item[item.length - 1];
        if (last[1] === position[i]) {
          item.push([position[i], position[j]]);
        } else {
          continue;
        }
      }
    }
  }
  let res = 0;
  for (const [key, value] of map) {
    if (value.length === m - 1) {
      res = Math.max(res, key);
    }
  }
  if (res === 0) {
    return Math.min(...map.keys());
  }
  return res;
}
