function solution(k, dungeons) {
  /**
   * 최소 피로도 : 한 던전을 돌 때 보유하고 있어야 하는 최소 피로도
   *
   * 소모 피로도 : 한 던전을 돌고 나서 소모되는 피로도
   */

  let answer = 0;

  // 최소 필요 피로도는 소모 피로도 보다 항상 크거나 같음
  // 최소 필요 피로도와 소모 피로도는 1 <= k <= 1000;
  // 서로 다른 던전이라도 최소 필요 피로도, 소모 피로도가 같을 수 있음

  const visited = Array.from({ length: dungeons.length }, () => false);

  const dfs = (cur, count) => {
    answer = Math.max(answer, count);

    for (let i = 0; i < dungeons.length; i += 1) {
      if (!visited[i] && cur >= dungeons[i][0]) {
        visited[i] = true;
        dfs(cur - dungeons[i][1], count + 1);
        visited[i] = false;
      }
    }
  };

  dfs(k, 0);

  return answer;
}

solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]);
