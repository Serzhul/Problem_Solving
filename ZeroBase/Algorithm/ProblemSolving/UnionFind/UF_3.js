// 마을의 수
// N 개의 집과 M개의 두 집을 연결하는 도로 정보가 주어질 때
// 각 집이 도로로 연결되어 있으면 하나의 마을(집합)이라고 판단
// 마을의 총 개수 구하기

class UnionFind {
  constructor(N) {
    this.parent = Array.from({ length: N + 1 }, (el, idx) => idx);
  }

  find(u) {
    if (u !== this.parent[u]) this.parent[u] = this.find(this.parent[u]);

    return this.parent[u];
  }

  merge(u, v) {
    u = this.find(u);
    v = this.find(v);

    if (u === v) {
      return;
    }

    this.parent[v] = u;
  }
}

const [N, M] = [7, 5];

const input = [
  [1, 2],
  [1, 4],
  [3, 5],
  [2, 6],
  [7, 3],
];

const unionFind = new UnionFind(N);

input.forEach((el) => {
  const [u, v] = el;
  unionFind.merge(u, v);
});

const visit = Array.from({ length: N + 1 }, () => 0);

input.forEach((el) => {
  let [u, v] = el;

  u = unionFind.find(u);
  v = unionFind.find(v);

  // u,v 는 각각의 루트를 찾게되고, 각 루트의 위치가 집합이 됨

  visit[u] = 1; // 마을이 존재한다.
  visit[v] = 1; // 마을이 존재한다.
});

const ans = visit.filter((el) => el === 1).length;

console.log(ans);
