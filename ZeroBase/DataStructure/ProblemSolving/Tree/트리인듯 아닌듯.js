// N 개의 u->v로 향하는 간선 정보인 정수 쌍 u,v가 주어질 때 해당 정보를 통해 트리인지 판단해보자.
// 트리는 하나의 루트 노드를 갖는다.

const inDegree = {};
const outDegree = {};
const node = {};
const edge = {};

// const arr = [
//   [6, 8],
//   [5, 3],
//   [5, 2],
//   [6, 4],
//   [5, 6],
// ];

const arr = [
  [3, 8],
  [6, 8],
  [6, 4],
  [5, 3],
  [5, 6],
  [5, 2],
];

arr.forEach((el) => {
  node[el[0]] = 1;
  node[el[1]] = 1;
  edge[[el[0], el[1]]] = 1;

  outDegree[el[0]] = 0;
  outDegree[el[1]] = 0;
  inDegree[el[0]] = 0;
  inDegree[el[1]] = 0;
});

arr.forEach((el) => {
  outDegree[el[0]] += 1;
  inDegree[el[1]] += 1;
});

console.log(inDegree);
console.log(outDegree);

let isTree = true;

// 1. 루트는 존재해야하며, 하나만 있어야 한다.
let rootCount = 0;
Object.entries(inDegree).forEach((inEl) => {
  if (inEl[1] === 0) {
    // 진입차수가 없다는 것은 루트 노드
    rootCount += 1;
  }
});

if (rootCount > 1) {
  isTree = false;
}

// 2. 진입 차수가 2개 이상 있는 노드가 있으면 안된다.

Object.entries(inDegree).forEach((el) => {
  if (el[1] >= 2) {
    console.log("진입차수가 2개 이상 있습니다 :", el[1]);
    isTree = false;
  }
});

// 3. 엣지 + 1은 노드 수와 동일하다.
console.log(
  `엣지 : ${Object.entries(edge).length} 노드 : ${Object.entries(node).length}`
);

if (Object.entries(edge).length + 1 !== Object.entries(node).length) {
  isTree = false;
}

console.log(isTree ? "Tree" : "Not Tree");
