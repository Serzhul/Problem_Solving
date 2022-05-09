const solution = (input) => {
  const [n, ...triangle] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, i) => (i === 0 ? +el : el.split(" ").map((n) => +n)));

  const dp = Array.from(triangle);

  dp[1][0] += dp[0][0];
  dp[1][1] += dp[0][0];

  for (let i = 2; i < n; i += 1) {
    for (let j = 0; j <= i; j += 1) {
      if (j === 0) {
        dp[i][j] += dp[i - 1][j];
      } else if (j === i) {
        dp[i][j] += dp[i - 1][j - 1];
      } else {
        dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
      }
    }
  }

  console.log(Math.max(...dp[n - 1]));
};

solution(`5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`);
