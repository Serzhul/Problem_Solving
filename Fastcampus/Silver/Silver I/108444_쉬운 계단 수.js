const solution = (input) => {
  const [N] = input.toString().trim().split("\n").map(Number);

  const MOD = 1000000000;

  const dp = Array.from({ length: N + 1 }, () => Array(10));

  dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  for (let i = 2; i <= N; i += 1) {
    for (let j = 0; j <= 9; j += 1) {
      dp[i][j] = 0;
      if (j > 0) dp[i][j] += dp[i - 1][j - 1];
      if (j < 9) dp[i][j] += dp[i - 1][j + 1];
      dp[i][j] %= MOD;
    }
  }

  let sum = 0;
  for (let i = 0; i <= 9; i += 1) {
    sum += dp[N][i];
  }
  console.log(sum % MOD);
};

solution(`2`);
