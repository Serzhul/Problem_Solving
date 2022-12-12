// 이항 계수
// 자연수 N과 정수 K가 주어질 때 이항계수를 10,007로 나눈 나머지 구하기
// 이항계수 = n!/k!(n-k!)
// C[n][k] = C[n-1][k-1] + C[n-1][k]
// nCr = n-1Cr-1 = n-1Cr

const MOD = 10007;
// const [N, K] = [5, 2];
const [N, K] = [10, 3];

const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: K + 1 }, () => 0)
);

dp[0][0] = 1;
dp[1][0] = 1;
dp[1][1] = 1;

for (let i = 2; i <= N; i += 1) {
  for (let j = 0; j <= K; j += 1) {
    if (j === 0 || j === i) {
      dp[i][j] = 1;
      continue;
    }

    dp[i][j] = (dp[i - 1][j - 1] % MOD) + (dp[i - 1][j] % MOD);
    dp[i][j] %= MOD;
  }
}
console.log(dp);
console.log(dp[N][K]);
