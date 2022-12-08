// 정점의 수 N과 간선의 수 M이 주어질 때 모든 정점을 연결하는데 필요한 최소 비용 구하기
// a, b, c 일 때 a와 b를 가중치 c로 연결
// (1 <= N <= 1000, 1 <= M <= 100000)

class UnionFind {
  constructor(N) {
    this.parent = Array.from({ length: N + 1 }, (el, idx) => idx);
    this.cost = 0;
  }

  find(u) {
    if (u === this.parent[u]) return u;

    return (this.parent[u] = this.find(this.parent[u]));
  }

  merge(u, v, val) {
    console.log(`u : ${u} v: ${v}`);
    u = this.find(u);
    v = this.find(v);

    if (u === v) return;

    console.log("merge 성공");
    this.parent[v] = u;
    this.cost += val;
  }
}

const N = 6;
const M = 9;

const arr = [
  // u, v, val
  [1, 2, 5],
  [1, 3, 4],
  [2, 3, 2],
  [2, 4, 7],
  [3, 4, 6],
  [3, 5, 11],
  [4, 5, 3],
  [4, 6, 8],
  [5, 6, 8],
];

const unionFind = new UnionFind(N);

// 간선의 가중치가 작은 순으로 오름차순 정렬

arr.sort((a, b) => a[2] - b[2]);

arr.forEach((el) => unionFind.merge(el[0], el[1], el[2]));

console.log(unionFind.cost);
