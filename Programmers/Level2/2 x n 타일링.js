const n = 7;

function solution(n) {
  const dp = Array.from({ length: n }, () => 0);
  dp[1] = 1;
  dp[2] = 2;

  const divisor = 1000000007;

  for (let i = 3; i <= n; i += 1) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % divisor;
  }

  return dp[n] % divisor;
}

console.log(solution(n));
