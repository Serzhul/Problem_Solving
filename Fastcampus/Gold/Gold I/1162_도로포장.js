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

  empty() {
    return !this.cnt;
  }
}

const solution = (input) => {
  const [[N, M, K], ...roads] = input
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

  const distance = [new Array(K + 1).fill(Infinity)];

  for (let i = 1; i <= N; i += 1) distance[i] = new Array(K + 1).fill(Infinity);

  function dijkstra(start) {
    const pq = new MinHeap();

    pq.push([0, start, 0]); // 비용, 노드 번호, 포장 횟수
    distance[start][0] = 0;

    while (pq.size() !== 0) {
      const [dist, cur, paved] = pq.pop();

      if (distance[cur][paved] < dist) continue;

      for (let i = 0; i < graph[cur].length; i += 1) {
        const [next, nextCost] = graph[cur][i];

        // 1. 포장하지 않는 경우 (일반적인 다익스트라)
        const cost = dist + nextCost;

        if (cost < distance[next][paved]) {
          distance[next][paved] = cost;
          pq.push([cost, next, paved]);
        }

        // 2. 포장하는 경우 cost 대신 Dist 사용
        if (paved < K && dist < distance[next][paved + 1]) {
          distance[next][paved + 1] = dist;
          pq.push([dist, next, paved + 1]);
        }
      }
    }
  }

  dijkstra(1);

  let res = Infinity;

  for (let i = 0; i <= K; i += 1) {
    res = Math.min(res, distance[N][i]);
  }

  console.log(res);
};

solution(`4 4 1
1 2 10
2 4 10
1 3 1
3 4 100`);
