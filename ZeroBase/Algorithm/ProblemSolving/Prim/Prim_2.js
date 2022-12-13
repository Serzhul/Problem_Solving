/* eslint-disable max-classes-per-file */
// 최소 비용 좌표
// N개의 좌표 x,y가 주어질 때, 좌표를 모두 이을 수 있는 최소 비용 구하기
// 거리는 맨하탄 거리로 게산 |x1-x2| + |y1-y2|

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

const N = 5;

const input = [
  [0, 0],
  [2, 2],
  [3, 10],
  [5, 2],
  [7, 0],
];

function getManhattan(x, y) {
  const [x1, y1] = x;
  const [x2, y2] = y;

  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

const arr = [];
const len = input.length;

for (let i = 0; i < len; i += 1) {
  for (let j = i + 1; j < len; j += 1) {
    arr.push([i, j, getManhattan(input[i], input[j])]);
  }
}

const graph = Array.from({ length: N + 1 }, () => []);

arr.forEach((el) => {
  const [from, to, val] = el;

  graph[from].push([to, val]);
  graph[to].push([from, val]);
});

const prim = new Prim(N);
const mstCost = prim.getMST(1, graph);

console.log(mstCost);
