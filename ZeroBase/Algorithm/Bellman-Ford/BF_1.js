// Bellman-Ford Algorithm
// 방향 그래프가 주어질 때, 시작점에서 다른 모든 정점까지의 최단 경로를 구하여 보자.
// 첫째줄에 V(1<= V <= 2000), E(1<=E<=30000), 시작점 K가 주어진다.
// E개 줄에 걸쳐 각 간선을 나타내는 (U,V,W)가 주어진다.(가중치가 W인 U->V로 가는 경로를 의미한다.)

class BellmanFord {
  constructor(V, K) {
    this.dist = Array.from({ length: V + 1 }, () => Infinity);
    this.dist[K] = 0;
  }

  start(V, graph) {
    // Edge Relaxation V-1반복
    // 사이클 여부 판단을 위해 V번
    // V번째에도 갱신이 일어나면 => 음수 사이클이 존재한다.

    for (let cnt = 0; cnt < V; cnt += 1) {
      // 모든 간선에 대해 최단거리를 갱신하는 과정
      for (let i = 1; i <= V; i += 1) {
        const [cur, curCost] = [i, this.dist[i]];

        // 시작점부터 2번까지 가는데 최단거리: dist[2] -> curCost
        // nextCost ? 시작점부터 2번까지 가는데 최단거리 + 2번에서 3번까지 가는데 가중치 = curCost + elem[1]
        graph[i].forEach((el) => {
          const [next, nextCost] = [el[0], el[1] + curCost];

          if (this.dist[next] > nextCost) {
            this.dist[next] = nextCost;

            if (cnt === V - 1) {
              console.log("Minus Cycle Exists!");
            }
          }
        });
      }
    }

    return this.dist;
  }
}

// const [V, E, K] = [5, 6, 1];

// const input = [
//   [5, 1, 1],
//   [1, 2, 2],
//   [1, 3, 3],
//   [2, 3, 4],
//   [2, 4, 5],
//   [3, 4, 6],
// ];

const [V, E, K] = [3, 3, 1];
const input = [
  [1, 2, 1],
  [2, 3, -20],
  [3, 1, 10],
];

const graph = Array.from({ length: V + 1 }, () => []);
input.forEach((el) => {
  const [from, to, val] = el;
  graph[from].push([to, val]);
});

console.log(graph);

const bellmanFord = new BellmanFord(V, K);

const ret = bellmanFord.start(V, graph);

console.log(ret);
