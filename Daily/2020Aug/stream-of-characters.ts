class TrieNode {
  public children: Array<TrieNode>;
  public isWord: boolean;
  constructor() {
    this.children = new Array(26).fill(null);
    this.isWord = false;
  }
}

class Trie {
  private root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string) {
    for (const ch of word) {
      const index = getIndex(ch);
      this.root.children[index] = this.root.children[index] || new TrieNode();
      this.root = this.root.children[index];
    }
    this.root.isWord = true;
  }

  check(letters: string[]) {
    for (let i = letters.length - 1; i >= 0; i--) {
      const letter = letters[i];
      const index = getIndex(letter);
      if (!this.root.children[index]) {
        //no path ahead
        return false;
      } else if (this.root.children[index].isWord) {
        // found a word!
        return true;
      }
      this.root = this.root.children[index];
    }
    return false;
  }
}

class StreamChecker {
  private trie: Trie;
  private stack: Array<string>;
  constructor(words: string[]) {
    this.trie = new Trie();
    this.stack = [];

    for (const word of words) {
      const reversedWord = reverse(word);
      this.trie.insert(reversedWord);
    }
  }
  query(letter: string): boolean {
    this.stack.push(letter);
    return this.trie.check(this.stack);
  }
}

function getIndex(char: string) {
  return char.charCodeAt(0) - 97;
}

function reverse(str: string) {
  return str.split("").reverse().join("");
}
