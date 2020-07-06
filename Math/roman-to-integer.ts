// I - 1;
// V - 5;
// X - 10;
// L - 50;
// C - 100;
// D - 500;
// M - 1000;

function romanToInt(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  let temp = s[0];
  const ans = [];
  const alphabets = ["I", "V", "X", "L", "C", "D", "M"];
  for (let index = 1; index < s.length; index++) {
    const prevLetter = temp[temp.length - 1];
    if (prevLetter === s[index]) {
      temp += s[index];
    } else {
      const alphaIndex = alphabets.indexOf(s[index]);
      const prevIndex = alphabets.indexOf(prevLetter);
      if (prevLetter === s[index + 1]) {
        ans.push(temp);
        temp = s[index];
        continue;
      }
      if (
        (fiveRelated(prevLetter) && prevIndex === alphaIndex - 1) ||
        (fiveRelated(s[index]) && prevIndex + 1 === alphaIndex)
      ) {
        temp += s[index];
        continue;
      }
      if (
        (zeroRelated(prevLetter) && prevIndex === alphaIndex - 2) ||
        (zeroRelated(s[index]) && prevIndex + 2 === alphaIndex)
      ) {
        temp += s[index];
        continue;
      }
      ans.push(temp);
      temp = s[index];
    }
  }
  if (temp.length > 0) {
    ans.push(temp);
  }
  console.log(ans);
  let sum = 0;
  for (let index = 0; index < ans.length; index++) {
    sum += getNumberFromString(ans[index]);
  }
  return sum;
}

const zeroRelated = (str: string) => {
  if (str === "X" || str === "C" || str === "M") {
    return true;
  }
  return false;
};

const fiveRelated = (str: string) => {
  if (str === "V" || str === "L" || str === "D") {
    return true;
  }
  return false;
};

const getNumberFromString = (letter: string): number => {
  if (letter.length === 1) {
    return convertToNumber(letter);
  }
  if (letter[0] === letter[1]) {
    return convertToNumber(letter[0]) * letter.length;
  }

  if (fiveRelated(letter[1]) || zeroRelated(letter[1])) {
    return convertToNumber(letter[1]) - convertToNumber(letter[0]);
  }

  if (fiveRelated(letter[0]) || zeroRelated(letter[0])) {
    const [top, rest] = [letter[0], ...letter];
    return convertToNumber(top) + convertToNumber(rest[0]) * rest.length;
  }

  return convertToNumber(letter);
};

const convertToNumber = (letter: string): number => {
  switch (letter) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
};
