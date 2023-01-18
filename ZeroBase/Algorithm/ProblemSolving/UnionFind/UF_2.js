// 사이클 끊기
// N개의 서로 연결된 정점 u,v쌍이 주어질 때 그래프에서 트리를 만들기 위해 끊어야 할 간선 선택
// A,B 정점 사이 간선을 끊어야 한다면 A B로 출력

class UnionFind {
  constructor(N) {
    this.parent = Array.from({ length: N + 1 }, (el, idx) => idx);
  }

  find(u) {
    if (u !== this.parent[u]) this.parent[u] = this.find(this.parent[u]);

    return this.parent[u];
  }

  merge(u, v) {
    const [oriU, oriV] = [u, v];
    u = this.find(u);
    v = this.find(v);

    if (u === v) {
      // 정답
      console.log(oriU, oriV);
      return;
    }

    this.parent[v] = u;
  }
}

// const N = 3;

// const input = [
//   [1, 2],
//   [1, 3],
//   [2, 3],
// ];

const N = 5;
const input = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 4],
  [1, 5],
];

const unionFind = new UnionFind(N);

input.forEach((el) => {
  const [u, v] = el;

  unionFind.merge(u, v);
});
