function toGoatLatin(S: string): string {
  const words = S.split(" ");
  let cnt = 0;
  let res = "";
  for (let index = 0; index < words.length; index++) {
    cnt++;
    if (vowelDetector(words[index][0].toLocaleLowerCase())) {
      res += words[index] + "ma" + "a".repeat(cnt);
    } else {
      res += words[index].slice(1) + words[index][0] + "ma" + "a".repeat(cnt);
    }
    if (index !== words.length - 1) {
      res += " ";
    }
  }
  return res;
}

const vowelDetector = (letter: string): boolean => {
  switch (letter) {
    case "a":
      return true;
    case "i":
      return true;
    case "u":
      return true;
    case "e":
      return true;
    case "o":
      return true;
    default:
      return false;
  }
};
