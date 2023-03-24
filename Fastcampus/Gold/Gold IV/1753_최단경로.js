class MinHeap {
  constructor() {
    this.heap = [];
    this.cnt = 0;
  }

  push(data) {
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

  pop() {
    if (this.cnt === 0) return null;

    const data = this.heap[1];
    this.heap[1] = this.heap[this.cnt];
    this.cnt -= 1;

    let cur = 1;
    let child;

    while (true) {
      child = cur * 2;

      if (
        child < this.cnt &&
        this.heap[child][0] > this.heap[this.child + 1][0]
      ) {
        child += 1;
      }

      if (child > this.cnt || this.heap[cur][0] < this.heap[child][0]) break;

      [this.heap[child], this.heap[cur]] = [this.heap[cur], this.heap[child]];

      cur = child;
    }

    return data;
  }

  peek() {
    return this.heap[this.cnt];
  }

  getSize() {
    return this.cnt;
  }
}

const solution = (file) => {
  const input = file.toString().split("\n");

  let INF = 1e9;

  let [n, m] = input[0].split(" ").map(Number);
  let start = Number(input[1]);
  let graph = [];

  for (let i = 0; i <= n + 1; i += 1) graph.push([]);
  for (let i = 2; i <= m + 1; i += 1) {
    let [a, b, c] = input[i].split(" ").map(Number);

    graph[a].push([b, c]);
  }

  let distance = new Array(n + 1).fill(INF);

  function dijkstra() {
    let pq = new MinHeap();

    pq.push([0, start]);
    distance[start] = 0;
    while (pq.getSize() !== 0) {
      let [dist, now] = pq.pop();

      if (distance[now] < dist) continue;

      for (let i of graph[now]) {
        let cost = dist + i[1];
        if (cost < distance[i[0]]) {
          distance[i[0]] = cost;
          pq.push([cost, i[0]]);
        }
      }
    }
  }

  dijkstra();

  for (let i = 1; i <= n; i += 1) {
    if (distance[i] === INF) console.log("INF");
    else console.log(distance[i]);
  }
};

solution(`5 6
1
5 1 1
1 2 2
1 3 3
2 3 4
2 4 5
3 4 6`);
