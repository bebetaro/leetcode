class MyHashSet {
  private item: any;
  constructor() {
    this.item = {};
  }

  add(key: number): void {
    if (!this.contains(key)) {
      this.item[key] = key;
    }
  }

  remove(key: number): void {
    if (this.contains(key)) {
      delete this.item[key];
    }
  }

  contains(key: number): boolean {
    return this.item.hasOwnProperty(key);
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
