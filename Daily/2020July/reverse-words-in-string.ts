function reverseWords(s: string): string {
  const words = s.trim().match(/\S+/g);
  if (words === null) {
    return "";
  }
  let word = words.pop();
  for (let index = 0; index < words.length; index++) {
    word += ` ${words[words.length - 1 - index]}`;
  }
  if (word) {
    return word;
  }
  return "";
}
