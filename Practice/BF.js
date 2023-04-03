let INF = 1e9;
let n = 6;
let m = 9;
let edges = [
  [1, 2, 6],
  [1, 3, 2],
  [2, 3, 2],
  [2, 4, 2],
  [3, 5, 1],
  [4, 6, 2],
  [5, 2, 1],
  [5, 4, 3],
  [5, 6, 4],
];

const dist = new Array(n + 1).fill(INF);

function bf(start) {
  dist[start] = 0;

  // 그래프에 담지 않고도 cycle이 있는지 계산할 수 있음

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      let [from, next, cost] = edges[j];

      // 방문 했던 노드중에서, 다음 노드의 비용이 현재 노드까지의 비용 + 다음 + 노드의 비용이라면 갱신
      if (dist[from] !== INF && dist[next] > dist[from] + cost) {
        dist[next] = dist[from] + cost;

        // 만약 i가 끝까지 돌았는데 갱신이 계속 된다는건 사이클이 존재한다는 것이므로 True를 반환
        if (i === n - 1) return true;
      }
    }
  }
}

const negativeCycle = bf(1);

if (negativeCycle) console.log(-1);
else {
  for (let i = 2; i <= n; i += 1) {
    if (dist[i] === INF) console.log(-1);
    else console.log(dist[i]);
  }
}
