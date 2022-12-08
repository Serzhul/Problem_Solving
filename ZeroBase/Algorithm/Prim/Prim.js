/* eslint-disable max-classes-per-file */
// 정점의 수 N과 간선의 수 M이 주어질 때 모든 정점을 연결하는데 필요한 최소 비용 구하기
// a, b, c 일 때 a와 b를 가중치 c로 연결
// (1 <= N <= 1000, 1 <= M <= 100000)

class PriorityQueue {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  print() {
    console.log(`=== heap === `);
    console.log(this.heap);
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
    this.pq = new PriorityQueue(N + 1);
    this.cost = 0;
  }

  getMST(start, graph) {
    this.visit[start] = 1; // 방문 했다고 체크

    graph[start].forEach((el) => this.pq.push(el));

    while (!this.pq.empty()) {
      const [cur, curCost] = this.pq.pop();

      if (this.visit[cur]) continue;

      this.visit[cur] = 1;
      this.cost += curCost;

      graph[cur].forEach((el) => {
        this.pq.push(el);
      });
    }

    return this.cost;
  }
}

const N = 6;
const M = 9;

const arr = [
  // u, v, val
  [1, 2, 5],
  [1, 3, 4],
  [2, 3, 2],
  [2, 4, 7],
  [3, 4, 6],
  [3, 5, 11],
  [4, 5, 3],
  [4, 6, 8],
  [5, 6, 8],
];

const graph = Array.from({ length: N + 1 }, () => []);

arr.forEach((el) => {
  const [from, to, val] = el;
  graph[from].push([to, val]);
  graph[to].push([from, val]);
});

console.log(graph);

const prim = new Prim(N);
const mstCost = prim.getMST(1, graph);
console.log(mstCost);
