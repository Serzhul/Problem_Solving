/* eslint-disable max-classes-per-file */
// 최단 경로
// 방향 그래프가 주어지면 시작점에서 다른 모든 정점으로의 최단 경로
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

    while (cur > 1 && this.heap[cur][1] < this.heap[par][1]) {
      [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  pop() {
    if (this.cnt === 0) return null;

    let data = this.heap[1];
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

      cur = child * 2;
    }

    return data;
  }

  empty() {
    return !this.cnt;
  }
}

class Dijkstra {
  start(graph, src, v) {
    const dist = Array.from({ length: V + 1 }, () => Infinity);

    // 시작점 => 시작점으로 가는 최단 거리는 0
    dist[src] = 0;

    const pq = new PriorityQueue(V + 1);

    pq.push([src, dist[src]]);

    while (!pq.empty()) {
      const [cur, cost] = pq.pop();

      if (dist[cur] < cost) continue;

      graph[cur].forEach((el) => {
        const [next, nextDist] = [el[0], cost + el[1]];

        if (dist[next] > nextDist) {
          dist[next] = nextDist;

          pq.push([next, nextDist]);
        }
      });
    }
    return dist;
  }
}

const [V, E, K] = [6, 9, 1];
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

const graph = Array.from({ length: V + 1 }, () => []);

input.forEach((el) => {
  const [from, to, val] = el;

  graph[from].push([to, val]);
  //   graph[to].push([from, val]);
});

console.log(graph);

const dijkstra = new Dijkstra();

const ret = dijkstra.start(graph, K, V);
console.log(ret);
