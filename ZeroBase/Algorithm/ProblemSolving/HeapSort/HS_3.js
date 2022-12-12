// K 번째로 큰 수

class MinHeap {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  push(data) {
    this.cnt += 1;
    this.heap[this.cnt] = data;

    let cur = this.cnt;
    let par = Math.floor(cur / 2);

    while (cur > 1 && this.heap[cur] < this.heap[par]) {
      [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  top() {
    if (this.cnt === 0) return Infinity;

    return this.heap[1];
  }

  pop() {
    if (this.cnt === 0) return Infinity;

    const data = this.heap[1];
    this.heap[1] = this.heap[this.cnt];
    this.cnt -= 1;

    let cur = 1;
    let child;

    while (true) {
      child = cur * 2;

      if (child < this.cnt && this.heap[child] > this.heap[child + 1]) {
        child += 1;
      }

      if (child > this.cnt || this.heap[cur] < this.heap[child]) break;

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];
      cur = child;
    }

    return data;
  }

  size() {
    return this.cnt;
  }
}

const [N, K] = [10, 3];
const arr = [9, 1, 2, 3, 7, 8, 4, 10, 5, 6];

const minHeap = new MinHeap(N + 1);

arr.forEach((el) => {
  if (minHeap.size() < K) {
    minHeap.push(el);
  } else if (minHeap.size() === K && minHeap.top() < el) {
    minHeap.pop();
    minHeap.push(el);
  }
});

console.log(minHeap.top());
