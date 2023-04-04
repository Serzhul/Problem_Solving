/* eslint-disable max-classes-per-file */
class PriorityQueue {
  constructor() {
    this.heap = [];
    this.cnt = 0;
  }

  enq(data) {
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

  deq() {
    if (this.cnt === 0) return null;

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

  size() {
    return this.cnt;
  }
}

class Queue {
  constructor() {
    this.items = {};
    this.headIdx = 0;
    this.tailIdx = 0;
  }

  enqueue(item) {
    this.items[this.tailIdx] = item;
    this.tailIdx += 1;
  }

  dequeue() {
    const item = this.items[this.headIdx];
    delete this.items[this.headIdx];
    this.headIdx += 1;
    return item;
  }

  size() {
    return this.tailIdx - this.headIdx;
  }
}

const solution = (input) => {
  const [[N, M], ...roads] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  const graph = Array.from({ length: N + 1 }, () => []);

  roads.forEach((road) => {
    const [from, to, cost] = road;

    graph[from].push([to, cost]);
    graph[to].push([from, cost]);
  });

  let distance = new Array(N + 1).fill(Infinity);

  const [start, end] = [1, N];

  function dijkstra(a, b) {
    const pq = new PriorityQueue();
    pq.enq([0, start]);
    distance[start] = 0;

    while (pq.size() !== 0) {
      const [dist, cur] = pq.deq();

      if (distance[cur] < dist) continue;

      for (let i = 0; i < graph[cur].length; i += 1) {
        const [next, nextCost] = graph[cur][i];

        if (next === a && cur === b) continue;
        else if (next === b && cur === a) continue;

        const cost = dist + nextCost;

        if (cost < distance[next]) {
          distance[next] = cost;
          pq.enq([cost, next]);
        }
      }
    }
  }

  dijkstra(-1, -1);

  function bfs() {
    const queue = new Queue();
    const visited = new Set();

    queue.enqueue(end);

    const removes = [];

    while (queue.size() !== 0) {
      const now = queue.dequeue();
      if (now === start) continue;

      for (let i = 0; i < graph[now].length; i += 1) {
        const [next, nextCost] = graph[now][i];
        const cost = distance[next] + nextCost;

        if (cost === distance[now]) {
          removes.push([next, now]);

          if (!visited.has(next)) {
            queue.enqueue(next);
            visited.add(next);
          }
        }
      }
    }

    return removes;
  }

  const removes = bfs();

  let res = 0;

  console.log(removes);

  for (let i = 0; i < removes.length; i += 1) {
    const [a, b] = removes[i];

    distance = new Array(N + 1).fill(Infinity);
    dijkstra(a, b);
    res = Math.max(res, distance[end]);
  }

  console.log(res);
};

solution(`5 6
1 2 4
1 3 3
2 3 1
2 4 4
2 5 7
4 5 1`);
