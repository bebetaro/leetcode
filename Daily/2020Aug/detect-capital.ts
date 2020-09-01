function detectCapitalUse(word: string): boolean {
  let bigIndex = Infinity;
  let bigCnt = 0;

  for (let index = 0; index < word.length; index++) {
    const c = word.charCodeAt(index);
    if (c >= 65 && 90 >= c) {
      bigCnt++;
      bigIndex = index;
    }
  }
  if (bigCnt === word.length) {
    return true;
  } else if (bigCnt === 1 && bigIndex === 0) {
    return true;
  } else if (bigCnt === 0) {
    return true;
  } else {
    return false;
  }
}
