// 친구 사이
// N개의 A,B로 이루어진 친구 사이가 주어질 때 각 입력마다 입력된 두 사람으 ㅣ친구 사이 총 몇명이 연결되어 있는지
class UnionFind {
  // N => id : 정점의 수
  constructor(N) {
    this.parent = Array.from({ length: N + 1 }, (el, idx) => [idx, 1]);
  }

  find(u) {
    if (u !== this.parent[u][0])
      this.parent[u][0] = this.find(this.parent[u][0]);

    return this.parent[u][0];
  }

  merge(u, v) {
    u = this.find(u);
    v = this.find(v);

    if (u === v) return;

    // v의 루트 노드를 u가 되도록 설정
    this.parent[v][0] = u;

    // u의 집합에 v와 집합의 수를 더해준다.
    this.parent[u][1] += this.parent[v][1];

    console.log(this.parent[u][1]);
  }
}

const N = 3;

// const friends = ["John Fred", "Fred Elise", "Dany Bred"].map((el) =>
//   el.split(" ")
// );

const friends = ["Fred Bany", "Fred Bred", "Jessy Bany"].map((el) =>
  el.split(" ")
);

const nameMap = {};
let id = 1;

friends.forEach((friend) => {
  const [u, v] = friend;

  if (nameMap[u] === undefined) {
    nameMap[u] = id;
    id += 1;
  }
  if (nameMap[v] === undefined) {
    nameMap[v] = id;
    id += 1;
  }
});

console.log(nameMap);

const unionFind = new UnionFind(id);

friends.forEach((friend) => {
  let [u, v] = friend;

  u = nameMap[u];
  v = nameMap[v];

  unionFind.merge(u, v);
});
