/* eslint-disable max-classes-per-file */
// 너무 밝은 도시 (크루스칼과 문제 동일)

const [n, m] = [7, 11];

const input = [
  [0, 1, 7],
  [0, 3, 5],
  [1, 2, 8],
  [1, 3, 9],
  [1, 4, 7],
  [2, 4, 5],
  [3, 4, 15],
  [3, 5, 6],
  [4, 5, 8],
  [4, 6, 9],
  [5, 6, 11],
];

class PriorityQueue {
  constructor(size) {
    this.heap = Array.from({ length: size + 1 }, () => 0);
    this.cnt = 0;
  }

  push(data) {
    this.cnt += 1;
    this.heap[this.cnt] = data;

    let cur = this.cnt;
    let par = Math.floor(cur / 2);

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

  empty() {
    return !this.cnt;
  }
}

class Prim {
  constructor(N) {
    this.visit = Array.from({ length: N + 1 }, () => 0);
    this.pq = new PriorityQueue();
    this.cost = 0;
  }

  getMST(start, graph) {
    this.visit[start] = 1;

    graph[start].forEach((el) => {
      const [next, nextCost] = el;
      this.pq.push([next, nextCost]);
    });

    while (!this.pq.empty()) {
      const [cur, curCost] = this.pq.pop();

      if (this.visit[cur]) continue;

      this.visit[cur] = 1;
      this.cost += curCost;

      graph[cur].forEach((el) => {
        const [next, nextCost] = el;
        this.pq.push([next, nextCost]);
      });
    }

    return this.cost;
  }
}
