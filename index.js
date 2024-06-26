class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    if (pos < this.items.length){
      return this.items[pos]
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length){
      return Math.max(...this.items)
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length){
      return Math.min(...this.items)
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
