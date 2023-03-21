const solution = (input) => {
  const [N] = input.toString().trim().split("\n").map(Number);

  const dp = new Array(N + 1).fill(0);

  const MOD = 15746;

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= N; i += 1) {
    dp[i] = (dp[i - 2] % MOD) + (dp[i - 1] % MOD);
  }

  console.log(dp[N] % MOD);
};

solution(`1000000`);
