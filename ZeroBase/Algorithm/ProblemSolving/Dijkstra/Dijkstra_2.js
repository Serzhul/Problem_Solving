/* eslint-disable max-classes-per-file */
// K번쨰 최단 경로
// N개의 집, M개의 집 사이 존재하는 도로의 수, 몇 번쨰 최단 경로인 K가 주어질 때
// 다익스트라는 NlogN

// K 개 이하일 때는 PQ에 넣어줌
// PQ의 Top에 있는 값이 넣으려는 값보다 더 큰 경우 뺀다.
// MaxHeap을 이용

class PriorityQueue {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  push(data) {
    this.cnt += 1;
    this.heap[this.cnt] = data;

    let cur = this.cnt;
    let par = Math.floor(cur / 2);

    while (cur > 1 && this.heap[cur][1] > this.heap[par][1]) {
      [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  top() {
    if (this.cnt === 0) return null;

    return this.heap[1][1];
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

      if (child < this.cnt && this.heap[child][1] < this.heap[child + 1][1]) {
        child += 1;
      }

      if (child > this.cnt || this.heap[cur] > this.heap[child]) break;

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }

    return data;
  }

  size() {
    return this.cnt;
  }

  empty() {
    return !this.cnt;
  }
}

class Dijkstra {
  start(graph, V, K) {
    const DUMMY = 0;
    const dist = Array.from({ length: V + 1 }, () => new PriorityQueue(V + 1));
    dist[1].push([0, 0]);

    const pq = new PriorityQueue(V + 1);

    pq.push([1, 0]);

    while (!pq.empty()) {
      const [cur, cost] = pq.pop();

      graph[cur].forEach((el) => {
        const [next, nextDist] = [el[0], cost + el[1]];

        if (dist[next].size() < K) {
          dist[next].push([DUMMY, nextDist]);
          pq.push([next, nextDist]);
        } else if (dist[next].top() > nextDist) {
          dist[next].pop();
          dist[next].push([DUMMY, nextDist]);

          pq.push([next, nextDist]);
        }
      });
    }

    return dist;
  }
}

const [V, E, K] = [5, 10, 2];

const input = [
  [1, 2, 2],
  [1, 3, 7],
  [1, 4, 5],
  [1, 5, 6],
  [2, 4, 2],
  [2, 3, 4],
  [3, 4, 6],
  [3, 5, 8],
  [5, 2, 4],
  [5, 4, 1],
];

const graph = Array.from({ length: V + 1 }, () => []);

input.forEach((el) => {
  const [from, to, val] = el;
  graph[from].push([to, val]);
});

const dijkstra = new Dijkstra();
const ret = dijkstra.start(graph, V, K);

for (let i = 1; i <= V; i += 1) {
  console.log(ret[i].size() === K ? ret[i].top() : -1);
}
