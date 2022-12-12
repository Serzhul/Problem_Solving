/* eslint-disable max-classes-per-file */
// N개의 수가 주어졌을 때, 절댓값을 기준으로 오름차순 정렬하기
// 절댓값이 같다면 실제 값이 작은 수가 더 앞선다.
// 0 이하 값은 최대힙, 0 이상 값은 최소 힙으로 정렬한다.
// => 음수로 된 값은 클 수록 작기 때문에

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

      if (child < this.cnt && this.heap[child] < this.heap[child + 1]) {
        child += 1;
      }

      if (child > this.cnt || this.heap[cur] > this.heap[child]) break;

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];
      cur = child;
    }

    return data;
  }
}

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
}

let N = 8;

const maxHeap = new MaxHeap(N + 1);
const minHeap = new MinHeap(N + 1);

const arr = [1, 2, 3, -4, 4, -5, 7, -1];

arr.forEach((el) => {
  if (el <= 0) maxHeap.push(el);
  else minHeap.push(el);
});

const sortedArr = [];

// console.log(maxHeap);
// console.log(minHeap);

while (N) {
  N -= 1;
  const data1 = maxHeap.top();
  const data2 = minHeap.top();

  if (Math.abs(data1) > Math.abs(data2)) {
    sortedArr.push(data2);
    minHeap.pop();
  } else {
    sortedArr.push(data1);
    maxHeap.pop();
  }
}

console.log(sortedArr);
