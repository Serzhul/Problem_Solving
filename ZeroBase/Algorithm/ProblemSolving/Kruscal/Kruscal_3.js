// 너무 밝은 도시
// 가로등마다 비용이 다를 때, 모든 두 집 쌍에 대해 불이 켜진 길만으로 서로 다닐 수 있게 하면서 가로등을 꺼서 얻을 수 있는 최대 비용
// 최소 신장 => 최소 비용
// 전체 비용 - 최소 신장 비용(cost) = 아낄 수 있는 최대 비용

class UnionFind {
  constructor(N) {
    this.parent = Array.from({ length: N + 1 }, (el, idx) => idx);
    this.cost = 0;
  }

  find(u) {
    if (this.parent[u] === u) return u;

    return (this.parent[u] = this.find(this.parent[u]));
  }

  merge(u, v, val) {
    u = this.find(u);
    v = this.find(v);

    if (u === v) return;

    this.parent[v] = u;
    this.cost += val;
  }
}

const [n, m] = [7, 11];

const input = [
  [0, 1, 7],
  [0, 3, 5],
  [1, 2, 8],
  [1, 3, 9],
  [1, 4, 7],
  [2, 4, 5],
  [3, 4, 15],
  [3, 5, 6],
  [4, 5, 8],
  [4, 6, 9],
  [5, 6, 11],
];

input.sort((a, b) => a[2] - b[2]);

const unionFind = new UnionFind(n);

let sum = 0;

input.forEach((el) => {
  sum += el[2];
  unionFind.merge(el[0], el[1], el[2]);
});

console.log(sum, unionFind.cost);
console.log(sum - unionFind.cost);
