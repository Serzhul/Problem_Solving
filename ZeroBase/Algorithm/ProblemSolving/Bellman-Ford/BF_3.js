// 네트워크 전송
// N개의 컴퓨터와 서로를 이어주는 M개의 네트워크 선
// M개의 선 정보는 u,v,w 최소 시간 구하기

class BellmanFord {
  constructor(V, K) {
    this.dist = Array.from({ length: V + 1 }, () => Infinity);
    this.dist[K] = 0;
  }

  start(V, graph) {
    for (let cnt = 0; cnt < V; cnt += 1) {
      for (let i = 1; i <= V; i += 1) {
        const [cur, curCost] = [i, this.dist[i]];

        graph[cur].forEach((el) => {
          const [next, nextCost] = [el[0], curCost + el[1]];

          if (this.dist[next] > nextCost) {
            this.dist[next] = nextCost;

            if (cnt === V - 1) {
              console.log("Minus Cycle Exist!");
              return;
            }
          }
        });
      }
    }

    return this.dist;
  }
}

// const [V, E, K] = [4, 3, 2];
// const input = [
//   [2, 1, 1],
//   [2, 3, 1],
//   [3, 4, 1],
// ];

const [V, E, K] = [3, 1, 2];
const input = [
  [1, 2, 2],
  [1, 3, 1],
  [3, 2, 4],
];

const graph = Array.from({ length: V + 1 }, () => []);

input.forEach((el) => {
  const [from, to, val] = el;

  graph[from].push([to, val]);
});

const bellmanFord = new BellmanFord(V, K);

const dist = bellmanFord.start(V, graph);

console.log(bellmanFord.dist);

dist.shift();
const minTime = Math.max(...dist);

console.log(minTime === Infinity ? -1 : minTime);

// 모든 네트워크게 데이터가 퍼지기 까지 최소시간
// 못가는 경우는 -1 그중 최대는
