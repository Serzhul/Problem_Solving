const operations = [
  "I -45",
  "I 653",
  "D 1",
  "I -642",
  "I 45",
  "I 97",
  "D 1",
  "D -1",
  "I 333",
];

class MinHeap {
  constructor(size = 0) {
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

  pop() {
    if (this.cnt === 0) return null;

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

  maxPop() {
    if (this.cnt === 0) return null;

    this.cnt -= 1;

    return this.heap.pop();
  }

  peek() {
    return this.heap[1];
  }

  getMax() {
    return this.heap[this.cnt];
  }

  sort() {
    return this.heap.sort((a, b) => a - b);
  }
}

function solution(operations) {
  const operationsMap = operations.map((operation) => operation.split(" "));
  const minHeap = new MinHeap();

  operationsMap.forEach((operation) => {
    const [command, number] = operation;

    if (command === "I") {
      minHeap.push(Number(number));
    } else if (command === "D") {
      if (number === "-1") {
        minHeap.pop();
      } else {
        minHeap.maxPop();
      }
    }
  });

  if (minHeap.cnt === 0) return [0, 0];

  minHeap.sort();

  return [minHeap.heap[minHeap.cnt - 1], minHeap.heap[0]];
}

console.log(solution(operations));
