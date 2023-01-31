const width = 4;
const height = 3;

function numberOfWaysToTraverseGraph(width, height) {
  const dp = Array.from({ length: height + 1 }, () =>
    Array.from({ length: width + 1 }, () => 0)
  );

  for (let i = 1; i <= height; i += 1) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= width; i += 1) {
    dp[0][i] = 1;
  }

  for (let i = 1; i <= height; i += 1) {
    for (let j = 1; j <= width; j += 1) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }

  return dp[height - 1][width - 1];
}

console.log(numberOfWaysToTraverseGraph(width, height));
