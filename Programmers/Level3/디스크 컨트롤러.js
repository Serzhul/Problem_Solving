class MinHeap {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  peek() {
    return this.heap[1];
  }

  size() {
    return this.cnt;
  }

  push(data) {
    this.cnt += 1;
    this.heap[this.cnt] = data;

    let cur = this.cnt;
    let par = Math.floor(cur / 2);

    // [요청 시점, 실행시간] 형태이며, 실행시간을 비교해 heap 구성

    while (cur > 1 && this.heap[cur][1] < this.heap[par][1]) {
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

      if (child < this.cnt && this.heap[child][1] > this.heap[child + 1][1]) {
        child += 1;
      }

      if (child > this.cnt || this.heap[cur][1] < this.heap[child][1]) break;

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }
    return data;
  }
}

const jobs = [
  [2, 3],
  [1, 9],
  [0, 6],
];

function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]);
  const count = jobs.length;
  const minHeap = new MinHeap(count);

  let time = 0;
  let complete = 0;
  let total = 0;

  while (jobs.length || minHeap.size()) {
    while (jobs.length) {
      if (jobs[0][0] === time) {
        minHeap.push(jobs.shift());
      } else break;
    }

    if (minHeap.size() && time >= complete) {
      const task = minHeap.pop();
      complete = task[1] + time;
      total += complete - task[0];
    }

    time += 1;
  }

  return Math.floor(total / count);
}

console.log(solution(jobs));
