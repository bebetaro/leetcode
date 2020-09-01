function largestComponentSize(A: number[]): number {
  // const arrayMap = new Map<number, number[]>();
  const factorMap = new Map<number, Set<number>>();

  for (let index = 0; index < A.length; index++) {
    getFactorList(A[index], factorMap);
  }

  const values = [...factorMap.values()].sort((a, b) => b.size - a.size);
  return values[0].size;
  //   .filter((item) => item.length > 1);
  // let set = new Set(values[0]);
  // const temp: Set<number[]> = new Set();
  // for (let index = 1; index < values.length; index++) {
  //   const size = set.size;
  //   const newSet = new Set();
  //   if (size + values[index].length > newSet.size) {
  //     if (newSet.size > set.size) {
  //       set = newSet;
  //       temp.forEach((item) => {
  //         const tempSet = new Set([...set, ...item]);
  //         if (item.length + newSet.size > tempSet.size) {
  //           set = tempSet;
  //         }
  //         temp.delete(item);
  //       });
  //     }
  //   } else {
  //     temp.add(values[index]);
  //   }
  // }
  // return Math.max(set.size);
}

const getFactorList = (num: number, map: Map<number, Set<number>>): void => {
  const res: number[] = [];
  const root = Math.floor(Math.sqrt(num));
  for (let index = 1; index <= root; index++) {
    if (index === 1) continue;
    if (num % index === 0) {
      res.push(index);
      // const item = map.get(index) || [];
      // item.push(num);
      // map.set(index, item);
      if (num / index !== index) {
        res.push(num / index);
        // const item = map.get(num / index) || [];
        // item.push(num);
        // map.set(num / index, item);
      }
    }
  }
  res.push(num);
  // const item = map.get(num) || [];
  // item.push(num);
  // map.set(num, item);
  let temp: number[] = [];
  for (const item of res) {
    const seq = map.get(item) || new Set();
    seq.add(num);
    temp = [...temp, ...seq];
  }

  const set = new Set(temp);
  for (const item of res) {
    map.set(item, set);
  }
};
