const solution = (input) => {
  const [N, ...cases] = input.toString().trim().split("\n").map(Number);

  for (let i = 0; i < cases.length; i += 1) {
    const target = cases[i];
    const dp = Array.from({ length: 100 }, () => 0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 1;

    for (let j = 3; j <= target; j += 1) {
      dp[j] = dp[j - 3] + dp[j - 2];
    }

    console.log(dp[target - 1]);
  }
};

solution(`2
6
12`);
