function getFolderNames(names: string[]): string[] {
  if (names.length === 0 || names === null) {
    return names;
  }
  const maps = new Map<string, number>();
  for (let index = 0; index < names.length; index++) {
    if (maps.has(names[index])) {
      let k = maps.get(names[index]) ?? 0;
      let temp = `${names[index]}(${k})`;
      while (maps.get(temp)) {
        k++;
        temp = `${names[index]}(${k})`;
      }
      maps.set(names[index], k);
      maps.set(temp, 1);
      names[index] = temp;
    } else {
      maps.set(names[index], 1);
    }
  }
  return names;
}
