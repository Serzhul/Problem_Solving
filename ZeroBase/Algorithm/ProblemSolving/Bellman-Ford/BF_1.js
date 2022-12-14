// 최단 경로
// 방향 그래프
// 벨먼-포드 알고리즘 시간 복잡도 (VE)

class BellmanFord {
  constructor(V, K) {
    this.dist = Array.from({ length: V + 1 }, () => Infinity);
    this.dist[K] = 0;
  }

  start(V, graph) {
    // Edge 존재한다.
    for (let cnt = 0; cnt < V; cnt += 1) {
      // 모든 간선에 대해 최단거리를 갱신하는 과정
      for (let i = 1; i <= V; i += 1) {
        const [cur, curCost] = [i, this.dist[i]];

        graph[cur].forEach((el) => {
          const [next, nextCost] = [el[0], curCost + el[1]];

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

const [V, E, K] = [6, 9, 1];

const input = [
  [1, 2, 5],
  [1, 3, 4],
  [2, 3, 2],
  [2, 4, -7],
  [3, 4, 6],
  [3, 5, 11],
  [4, 5, -3],
  [4, 6, 8],
  [5, 6, 8],
];

const graph = Array.from({ length: V + 1 }, () => []);

input.forEach((el) => {
  const [from, to, val] = el;

  graph[from].push([to, val]);
});

const bellmanFord = new BellmanFord(V, K);

const dist = bellmanFord.start(V, graph);
console.log(dist);
