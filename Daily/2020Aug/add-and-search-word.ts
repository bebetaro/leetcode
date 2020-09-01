class WordDictionary {
  private dict: string[];
  constructor() {
    this.dict = [];
  }

  addWord(word: string): void {
    this.dict.push(word);
  }

  search(word: string): boolean {
    if (this.dict.includes(word)) return true;
    const found = this.dict.find((item) => {
      if (item.length !== word.length) return false;
      for (let index = 0; index < word.length; index++) {
        if (word[index] === ".") continue;
        if (word[index] !== item[index]) return false;
      }
      return true;
    });
    if (found) {
      return true;
    } else {
      return false;
    }
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

//  木構造作って探索する
//  class TrieNode {
//    endsWord: boolean;
//    children: { [k: string]: TrieNode };
//    constructor() {
//      this.endsWord = false;
//      this.children = {};
//    }
//  }

//  class WordDictionary {
//    trie: TrieNode = new TrieNode();

//    constructor() {}

//    addWord(word: string): void {
//      let node: TrieNode = this.trie;
//      for (let i = 0; i < word.length; i += 1) {
//        const c = word.charAt(i);
//        if (!(c in node.children)) {
//          node.children[c] = new TrieNode();
//        }
//        node = node.children[c];
//      }
//      node.endsWord = true;
//    }

//    search(word: string): boolean {
//      const helper = (node: TrieNode, i: number): boolean => {
//        if (i === word.length) {
//          return node.endsWord;
//        }
//        const c = word.charAt(i);
//        if (c === ".") {
//          for (const key in node.children) {
//            if (helper(node.children[key], i + 1)) {
//              return true;
//            }
//          }
//          return false;
//        } else {
//          if (c in node.children) {
//            return helper(node.children[c], i + 1);
//          } else {
//            return false;
//          }
//        }
//      };
//      return helper(this.trie, 0);
//    }
//  }
