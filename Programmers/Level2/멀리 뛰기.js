const n = 4;

function solution(n) {
  const mod = 1234567;

  const dp = Array.from({ length: n }, () => 0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i += 1) {
    dp[i] = Math.floor((dp[i - 2] + dp[i - 1]) % mod);
  }

  return dp[n];
}

console.log(solution(n));
