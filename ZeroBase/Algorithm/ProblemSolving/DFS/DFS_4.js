// 자연수 N,M
// 1부터 자연수 중에서 중복 없이 M개를 고른 수열을 오름차순으로 정렬

function dfs(N, M, cur, ans) {
  if (ans.length === M) {
    console.log(ans);
    return;
  }

  for (let i = cur; i <= N; i += 1) {
    ans.push(i);
    dfs(N, M, i + 1, ans);
    ans.pop();
  }
}

const [N, M] = [4, 2];
dfs(N, M, 1, []);
