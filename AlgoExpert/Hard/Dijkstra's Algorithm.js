const start = 0;
const edges = [
  [[1, 7]],
  [
    [2, 6],
    [3, 20],
    [4, 3],
  ],
  [[3, 14]],
  [[4, 2]],
  [],
  [],
];

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

      if (child < this.cnt && this.heap[child[0]] > this.heap[child + 1][0]) {
        child += 1;
      }

      if (child > this.cnt || this.heap[cur][0] < this.heap[child][0]) break;
      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }

    return data;
  }

  size() {
    return this.cnt;
  }
}

function dijkstrasAlgorithm(start, edges) {
  const n = edges.length;
  const distance = Array.from({ length: n }, () => Infinity);
  const pq = new PriorityQueue();

  pq.enq([0, start]);
  distance[start] = 0;

  while (pq.size() !== 0) {
    const [dist, cur] = pq.deq();

    if (distance[cur] < dist) continue;

    for (let i = 0; i < edges[cur].length; i += 1) {
      const [next, nextCost] = edges[cur][i];
      const cost = dist + nextCost;

      if (cost < distance[next]) {
        distance[next] = cost;
        pq.enq([cost, next]);
      }
    }
  }

  return distance.map((el) => (el === Infinity ? -1 : el));
}

console.log(dijkstrasAlgorithm(start, edges));
