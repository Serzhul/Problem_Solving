class MaxHeap {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  push(data) {
    this.cnt += 1;
    this.heap[this.cnt] = data;

    let cur = this.cnt;
    let par = Math.floor(cur / 2);

    while (cur > 1 && this.heap[cur] > this.heap[par]) {
      [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  pop() {
    if (this.cnt === 0) return null;
    const data = this.heap[1];
    this.heap[1] = this.heap[this.cnt];
    this.cnt -= 1;

    let cur = 1;
    let child;

    while (true) {
      child = cur * 2;
      if (child < this.cnt && this.heap[child] < this.heap[child + 1]) {
        child += 1;
      }

      if (child > this.cnt || this.heap[cur] > this.heap[child]) break;

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }

    return data;
  }

  peek() {
    return this.heap[1];
  }
}

const maxHeap = new MaxHeap();

maxHeap.push([250, "Doohyun Kim"]);
maxHeap.push([300, "Gildong Hong"]);
maxHeap.push([150, "Minchul Han"]);

console.log(maxHeap.cnt);
console.log(maxHeap.pop());
console.log(maxHeap.peek());
console.log(maxHeap.cnt);
