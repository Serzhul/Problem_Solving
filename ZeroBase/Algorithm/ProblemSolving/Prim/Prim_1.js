/* eslint-disable max-classes-per-file */
// 그래프가 주어질 때, 그래프의 최소 스패닝 트리 구하기
// 최소 스패닝 트리는 그래프의 모든 정점들을 연결하는 부분 그래프 중 가중치의 합이 최소인 트리

class PriorityQueue {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  print() {
    console.log("=== heap ===");
    console.lolg(this.heap);
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

      if (child > this.cnt || this.heap[cur][1] < this.heap[child][1]) {
        break;
      }

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

const [N, M] = [6, 9];

const input = [
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

input.forEach((el) => {
  const [from, to, val] = el;
  graph[from].push([to, val]);
  graph[to].push([from, val]);
});

const prim = new Prim(N);
const mstCost = prim.getMST(1, graph);
console.log(mstCost);
