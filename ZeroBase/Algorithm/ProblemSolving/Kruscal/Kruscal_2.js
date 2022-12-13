// 별자리
// N개의 별과, 별들의 좌표가 (x,y)로 M개 주어질 때, 모든 별을 최소 거리로 이어 별자리 만들기
// (소수점 둘째자리까지 출력)

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
    this.cost += parseFloat(val);
  }
}

function getDist(u, v) {
  return Math.sqrt((u[0] - v[0]) ** 2 + (u[1] - v[1]) ** 2);
}

const [N, M] = [3, 3];

const input = [
  [1.0, 1.0],
  [2.0, 2.0],
  [2.0, 4.0],
];

const len = input.length;
const arr = [];

for (let i = 0; i < len; i += 1) {
  for (let j = i + 1; j < len; j += 1) {
    arr.push([i, j, getDist(input[i], input[j]).toFixed(2)]);
  }
}

arr.sort((a, b) => a[2] - b[2]);

const unionFind = new UnionFind(N);

console.log(arr);

arr.forEach((el) => {
  unionFind.merge(el[0], el[1], el[2]);
});

console.log(unionFind.cost);
