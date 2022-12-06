// 2 * N 직사각형을 1*2, 2*1, 2*2 타일로 채우는 방법의 수를 구하자

const N = 12;

const dp = Array.from({ length: N + 1 }, () => 0);

// dp[n] => 2*n 직사각형을 1*2, 2*1, 2*2 타일로 채우는 방법의 수

dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= N; i += 1) {
  dp[i] = dp[i - 1] + dp[i - 2] * 2;
}

console.log(dp[N]);
