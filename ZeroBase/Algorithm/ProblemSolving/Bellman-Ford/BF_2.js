// 워프 게이트
// N개의 집, 한 집에서 다른 집으로 갈 수 있는 워프게이트 M개
// 음수 -> 벨먼 포드(VE), 플로이드 워셜 (V^3)
// 다익스트라는 음수 가중치를 해결할 수 없음

class BellmanFord {
  constructor(V, K) {
    this.dist = Array.from({ length: V + 1 }, () => Infinity);
    this.dist[K] = 0;
  }

  start(V, graph) {
    for (let cnt = 0; cnt < V; cnt += 1) {
      for (let i = 0; i <= V; i += 1) {
        const [cur, curCost] = [i, this.dist[i]];

        graph[i].forEach((el) => {
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

const [V, E, src, dst] = [5, 10, 1, 5];

const input = [
  [1, 2, 4],
  [1, 3, 3],
  [2, 3, -1],
  [3, 1, -2],
  [1, 4, 8],
  [4, 5, -3],
  [3, 5, -2],
  [2, 4, 6],
  [4, 3, 1],
  [2, 5, -6],
];

const graph = Array.from({ length: V + 1 }, () => []);

input.forEach((el) => {
  const [from, to, val] = el;
  graph[from].push([to, val]);
});

const bellmanFord = new BellmanFord(V, src);
const dist = bellmanFord.start(V, graph);

console.log(dist);
console.log(dist[dst]);
