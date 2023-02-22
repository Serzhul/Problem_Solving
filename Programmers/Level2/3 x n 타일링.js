const n = 4;

function solution(n) {
  const MOD = 1000000007;
  const dp = Array.from({ length: n + 1 }, () => 0);

  dp[2] = 3;

  if (n > 2) {
    dp[4] = 11;
    for (let i = 6; i <= n + 1; i += 1) {
      if (i % 2 === 0) {
        dp[i] = dp[i - 2] * 3 + 2;
        for (let j = i - 4; j > -1; j -= 2) {
          dp[i] += dp[j] * 2;
        }
        dp[i] %= MOD;
      } else dp[i] = 0;
    }
  }

  return dp[n];
}

console.log(solution(n));
