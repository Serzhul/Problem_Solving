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

const solution = (input) => {
  const [[N, E], ...edges] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  const [a, b] = edges[E];

  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 0; i < E; i += 1) {
    const [from, to, cost] = edges[i];

    graph[from].push([to, cost]);
    graph[to].push([from, cost]);
  }

  let distance = new Array(N + 1).fill(Infinity);

  function dijkstra(start) {
    const pq = new PriorityQueue();

    pq.enq([0, start]);
    distance[start] = 0;

    while (pq.size() !== 0) {
      const [dist, cur] = pq.deq();

      if (distance[cur] < dist) continue;

      for (let i = 0; i < graph[cur].length; i += 1) {
        const [next, nextCost] = graph[cur][i];

        const cost = dist + nextCost;

        if (cost < distance[next]) {
          distance[next] = cost;
          pq.enq([cost, next]);
        }
      }
    }
  }
  dijkstra(1);

  const distance_1_to_a = distance[a];
  const distance_1_to_b = distance[b];

  distance = new Array(N + 1).fill(Infinity);

  dijkstra(a);

  const distance_a_to_b = distance[b];
  const distance_a_to_n = distance[N];

  distance = new Array(N + 1).fill(Infinity);

  dijkstra(b);
  const distance_b_to_a = distance[a];
  const distance_b_to_n = distance[N];

  const route1 = distance_1_to_a + distance_a_to_b + distance_b_to_n;
  const route2 = distance_1_to_b + distance_b_to_a + distance_a_to_n;

  const res = Math.min(route1, route2);

  if (res >= Infinity) console.log(-1);
  else console.log(res);
};

solution(`4 6
1 2 3
2 3 3
3 4 1
1 3 5
2 4 5
1 4 4
2 3`);
