/* eslint-disable max-classes-per-file */
// 방향 그래프가 주어질 때, 시작점에서 다른 모든 정점가지의 최단 경로 구하기
// 첫째줄은 V, E, K가 정점, 간선, 시작점 순으로 주어짐
// 그 다음줄 부터 E개의 줄에 걸쳐 각 간선을 나타내는 U, V, W가 주어짐 => 가중치 W가 U->V로 가는 경로를 의미

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

class Dijkstra {
  start(graph, src, V, E) {
    // 최단거리 테이블을 무한대로 초기화
    const dist = Array.from({ length: V + 1 }, () => Infinity);
    // 시작점 -> 시작점 최단거리는 0
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

const [V, E, K] = [5, 6, 1];

const input = [
  [5, 1, 1],
  [1, 2, 2],
  [1, 3, 3],
  [2, 3, 4],
  [2, 4, 5],
  [3, 4, 6],
];

const graph = Array.from({ length: V + 1 }, () => []);
input.forEach((el) => {
  const [from, to, val] = el;

  graph[from].push([to, val]);
});

const dijkstra = new Dijkstra();

const ret = dijkstra.start(graph, K, V, E);
console.log(ret); // dist
