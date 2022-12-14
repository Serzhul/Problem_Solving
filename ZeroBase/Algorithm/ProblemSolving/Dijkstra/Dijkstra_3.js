/* eslint-disable max-classes-per-file */
// 최단 경로 추적
// N개의 도시와 도시 사이의 도로 M개가 주어질 때, A에서 B로 가는 최단 경로 및 경로 출력

// M개의 도로 정보 u,v,w는 u에서 v로 가는데 걸리는 시간 w

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

  size() {
    return this.cnt;
  }

  empty() {
    return !this.cnt;
  }
}

class Dijkstra {
  constructor(N) {
    this.trace = Array.from({ length: N + 1 }, () => 0);
  }

  start(graph, src, V) {
    const dist = Array.from({ length: V + 1 }, () => Infinity);

    dist[src] = 0;

    const pq = new PriorityQueue(V + 1);

    pq.push([src, dist[src]]);

    while (!pq.empty()) {
      const [cur, cost] = pq.pop();

      graph[cur].forEach((el) => {
        const [next, nextDist] = [el[0], cost + el[1]];

        if (dist[next] > nextDist) {
          dist[next] = nextDist;

          this.trace[next] = cur;

          pq.push([next, dist[next]]);
        }
      });
    }

    return dist;
  }
}

const [V, E, start, end] = [5, 8, 1, 5];

const input = [
  [1, 2, 2],
  [1, 3, 3],
  [1, 4, 1],
  [1, 5, 10],
  [2, 4, 2],
  [3, 4, 1],
  [3, 5, 1],
  [4, 5, 3],
];

const graph = Array.from({ length: V + 1 }, () => []);

input.forEach((el) => {
  const [from, to, val] = el;
  graph[from].push([to, val]);
});

const dijkstra = new Dijkstra();

const dist = dijkstra.start(graph, start, V);

console.log(dist);
console.log(dijkstra.trace);
// 0,0,1,1,1,4 => 5번째 정점 이전 정점 -> 4번 정점 / 4번째 정점 이전 정점 -> 1번 정점

const trace = [];

for (let i = end; i !== start; i = dijkstra.trace[i]) {
  trace.push(i);
}

trace.push(start);
console.log(dist[end]);
console.log(trace.reverse());
