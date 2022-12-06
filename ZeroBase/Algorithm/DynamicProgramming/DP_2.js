// N*M 배열에 0,1로 된 배열이 있을 때, 배열에서 1로 된 가장 큰 정사각형 길이

const N = 5;
const M = 5;

const arr = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [0, 1, 1, 0, 0],
];

// dp[y][x] = y,x 번째에서 만들 수 있는 정사각형의 최대 길이
const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: M + 1 }, () => 0)
);

let ans = 0;

for (let i = 1; i <= N; i += 1) {
  for (let j = 1; j <= M; j += 1) {
    if (arr[i][j]) {
      // 왼쪽, 위, 대각선 중 최솟값 + 1
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;

      ans = Math.max(dp[i][j], ans);
    }
  }
}

console.log(dp);
console.log(ans);
