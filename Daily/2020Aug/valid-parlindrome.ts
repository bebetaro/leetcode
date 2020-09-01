function isPalindrome(s: string): boolean {
  const words = s.toLocaleLowerCase().match(/\d|[a-z]/g) || [];
  if (words.join("") === words.reverse().join("")) {
    return true;
  }
  return false;
}
