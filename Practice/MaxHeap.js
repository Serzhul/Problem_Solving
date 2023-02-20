class MinHeap {
  constructor(size) {
    this.size = size;
    this.heap = Array.from({ length: size }, () => 0);
    this.count = 0;
  }

  push(data) {
    this.count += 1;
    this.heap[this.count] = data;

    let cur = this.count;
    let par = Math.floor(cur / 2);

    while (cur > 1 && this.heap[cur] > this.heap[par]) {
      [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  pop() {
    if (this.count === 0) return null;

    const data = this.heap[1];
    this.heap[1] = this.heap[this.count];
    this.count -= 1;

    let cur = 1;
    let child;

    while (true) {
      child = cur * 2;

      if (child < this.count && this.heap[child] < this.heap[child + 1]) {
        child += 1;
      }

      if (child > this.count || this.heap[cur] > this.heap[child]) break;

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }

    return data;
  }

  getMin() {
    return this.heap[1];
  }
}
