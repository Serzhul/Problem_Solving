// 트리의 부모 찾기
// 루트가 1이고, N개의 노드를 가진 트리와, 각 노드 사이의 정보 M개가 주어질 때
// 루트 노드를 제외한 각 노드의 부모 구하기
//

function dfs(cur, tree, ans) {
  const len = tree[cur].length;

  for (let i = 0; i < len; i += 1) {
    ans[tree[cur][i]] = cur;
    dfs(tree[cur][i], tree, ans);
  }
}

const input = [
  [7, 6],
  [1, 6],
  [6, 3],
  [3, 5],
  [1, 4],
  [4, 2],
  [4, 7],
];

const N = 7;
const root = 1;

const tree = Array.from({ length: N + 1 }, () => []);

tree[1].push(6);
tree[6].push(3);
tree[3].push(5);
tree[1].push(4);
tree[4].push(2);
tree[4].push(7);

let ans = Array.from({ length: N + 1 }, () => 0);

dfs(root, tree, ans);

console.log(ans);
