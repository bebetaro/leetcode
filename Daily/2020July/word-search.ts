function exist(board: string[][], word: string): boolean {
  const map = new Map<string, number[][]>();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let query = [[i, j]];
      if (map.has(board[i][j])) {
        const arr = map.get(board[i][j]) || [];
        query = arr.concat(query);
      }
      map.set(board[i][j], query);
    }
  }
  return traverseMaps(map, word, "", [], board);
}

const traverseMaps = (
  _map: Map<string, number[][]>,
  _word: string,
  target: string,
  addr: number[],
  ans: string[][]
): boolean => {
  if (target.length === _word.length) {
    return target === _word ? true : false;
  }

  const char = _word[target.length];
  const arr = _map.get(char) || [];
  if (arr.length === 0) {
    return false;
  }
  if (addr.length > 0) {
    ans[addr[0]][addr[1]] = "#";
  }
  for (const item of arr) {
    if (ans[item[0]][item[1]] === "#") continue;
    if (
      target.length === 0 &&
      traverseMaps(_map, _word, target + char, item, ans)
    ) {
      return true;
    }

    if (
      checkAddress(addr[0], addr[1], item) &&
      traverseMaps(_map, _word, target + char, item, ans)
    ) {
      return true;
    }
  }
  if (addr.length > 0) {
    ans[addr[0]][addr[1]] = char;
  }

  return false;
};

const checkAddress = (_i: number, _j: number, _addr: number[]) => {
  if (
    [_i - 1, _j].toString() === _addr.toString() ||
    [_i + 1, _j].toString() === _addr.toString() ||
    [_i, _j - 1].toString() === _addr.toString() ||
    [_i, _j + 1].toString() === _addr.toString()
  ) {
    return true;
  }
  return false;
};
