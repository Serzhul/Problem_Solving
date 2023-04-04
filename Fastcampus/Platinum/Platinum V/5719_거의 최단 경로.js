/* eslint-disable max-classes-per-file */
export default class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex += 1;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex += 1;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  getSize() {
    return this.tailIndex - this.headIndex;
  }
}

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

    while (cur > 1 && this.heap[cur][0] < this.heap[par][0]) {
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
      if (child < this.cnt && this.heap[child][0] > this.heap[child + 1][0]) {
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

const solution = (input) => {
  const data = input.toString().trim().split("\n");

  let n;
  let m;
  let line = 0;
  let start;
  let end;
  let graph;
  let distance;
  let reversedGraph;
  let removes;

  function dijkstra() {
    const pq = new PriorityQueue();
    pq.enq([0, start]);
    distance[start] = 0;

    while (pq.size() !== 0) {
      const [dist, now] = pq.deq();

      if (distance[now] < dist) continue;

      for (let i = 0; i < graph[now].length; i += 1) {
        const [next, nextCost] = graph[now][i];
        const cost = dist + nextCost;
        if (cost < distance[next]) {
          distance[next] = cost;
          pq.enq([cost, next]);
        }
      }
    }
  }

  function bfs() {
    const queue = new Queue();
    const visited = new Set();

    queue.enqueue(end);
    const targets = [];
    while (queue.getSize() !== 0) {
      const cur = queue.dequeue();
      if (cur === start) continue;
      for (let i = 0; i < reversedGraph[cur].length; i += 1) {
        const [next, nextCost] = reversedGraph[cur][i];
        const cost = distance[next] + nextCost;
        if (cost === distance[cur]) {
          targets.push([next, cur]);

          if (!visited.has(next)) {
            queue.enqueue(next);
            visited.add(next);
          }
        }
      }
    }

    return targets;
  }

  function getNewGraph() {
    removes = bfs();
    const newGraph = [];
    for (let i = 0; i < n; i += 1) newGraph.push([]);
    for (let a = 0; a < n; a += 1) {
      for (let i = 0; i < graph[a].length; i += 1) {
        const [b, c] = graph[a][i];
        let check = true;
        for (let j = 0; j < removes.length; j += 1) {
          const [x, y] = removes[j];
          if (a === x && b === y) check = false;
        }
        if (check) newGraph[a].push([b, c]);
      }
    }

    return newGraph;
  }

  while (true) {
    [n, m] = data[line].split(" ").map(Number);
    if (n === 0 && m === 0) break;

    [start, end] = data[line + 1].split(" ").map(Number);
    graph = [];

    for (let i = 0; i < n; i += 1) graph.push([]);

    reversedGraph = [];
    for (let i = 0; i < n; i += 1) reversedGraph.push([]);

    for (let i = line + 2; i < line + 2 + m; i += 1) {
      const [a, b, c] = data[i].split(" ").map(Number);

      graph[a].push([b, c]);
      reversedGraph[b].push([a, c]);
    }

    distance = new Array(n).fill(Infinity);
    dijkstra();

    graph = getNewGraph();

    distance = new Array(n).fill(Infinity);
    dijkstra();

    if (distance[end] === Infinity) console.log(-1);
    else console.log(distance[end]);
    line += m + 2;
  }
};

solution(`7 9
0 6
0 1 1
0 2 1
0 3 2
0 4 3
1 5 2
2 6 4
3 6 2
4 6 4
5 6 1
4 6
0 2
0 1 1
1 2 1
1 3 1
3 2 1
2 0 3
3 0 2
6 8
0 1
0 1 1
0 2 2
0 3 3
2 5 3
3 4 2
4 1 1
5 1 1
3 0 1
0 0`);
