// 자연수 N,M이 주어질 때, 1부터 N까지의 자연수 중 M개를 고른 수업을 만들어보다

const N = 4;
const M = 2;

function dfs(N, M, ans) {
  if (ans.length === M) {
    console.log(ans);
    return;
  }

  for (let i = 1; i <= N; i += 1) {
    ans.push(i);
    dfs(N, M, ans);
    ans.pop();
  }
}

dfs(4, 2, []);
