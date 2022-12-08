// 자연수 N과 M이 주어질 때 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열 찾기

function backtracking(N, M, visit, ans) {
  if (ans.length === M) {
    console.log(ans);
    return;
  }

  for (let i = 1; i <= N; i += 1) {
    // 더 이상 해가 될 수 없는 영역
    if (!visit[i]) {
      ans.push(i);
      visit[i] = 1;
      backtracking(N, M, visit, ans);
      visit[i] = 0;
      ans.pop();
    }
  }
}

const [N, M] = [4, 4];

const visit = Array.from({ length: N + 1 }, () => 0);
backtracking(N, M, visit, []);
