const climbStairs = (n) => {
  if (n <= 2) return 1;

  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i += 1) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

climbStairs(2);
