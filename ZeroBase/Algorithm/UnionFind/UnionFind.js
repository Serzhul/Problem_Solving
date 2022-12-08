// N (1<= N <= 1000000)개의 정점과 M(1<= M <= 100000)개의 연산이 주어질 때 아래 조건에 맞게 문제 풀기
// 합집합은 0, u, v 형태로 주어지고 이는 u가 포함되어 있는 집합과 v가 포함되어 있는 집합을 합친다는 의미다.
// 두 집합이 같은 집합에 포함되어 있는지 확인하는 연산은 1 u v 형태로 주어진다.
// 이때 같은 집합이면 Y, 다른 집합이면 N으로 나타내라

class UnionFind {
  constructor(N) {
    // 3가지 과정 중 Make
    // 자기자신이 부모 노드가 되게 만들어 진다.
    this.parent = Array.from({ length: N + 1 }, (el, idx) => idx);
  }

  find(u) {
    // 만약 루트 노드라면 return u

    if (u === this.parent[u]) return u;

    return (this.parent[u] = this.find(this.parent[u]));
  }

  merge(u, v) {
    u = this.find(u);
    v = this.find(v);

    console.log(`u: ${u}, v: ${v}`);

    // 루트 노드가 같다면 같은 트리임
    if (u === v) return;

    this.parent[v] = u;
  }
}

const [N, M] = [7, 8];

const arr = [
  [0, 1, 3],
  [1, 1, 7],
  [0, 7, 6],
  [1, 7, 1],
  [0, 3, 7],
  [0, 4, 2],
  [0, 1, 1],
  [1, 1, 1],
  [1, 1, 6],
  [1, 1, 4],
];

const unionFind = new UnionFind(N);

arr.forEach((el) => {
  let [num, u, v] = el;

  if (num === 0) {
    // 두 집합을 합치는 영상
    unionFind.merge(u, v);
  } else if (num === 1) {
    u = unionFind.find(u);
    v = unionFind.find(v);

    console.log(u === v ? "Y" : "N");
  }
});

// 0 1 3  => 1이 포함된 집합과 3이 포함되어 있는 집합을 합친다.
