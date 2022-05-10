const solution = (input) => {
  const [[n, m], ...array] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, i) =>
      i === 0
        ? el.split(" ").map((n1) => Number(n1))
        : el.split("").map((n2) => Number(n2))
    );

  // DP[i][j] => i,j 위치까지 왔을 때 가장 큰 정사각형의 크기
  // dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1]) + 1

  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      dp[i + 1][j + 1] = array[i][j];
    }
  }

  let mx = 0;

  for (let i = 1; i < n + 1; i += 1) {
    for (let j = 1; j < m + 1; j += 1) {
      if (array[i - 1][j - 1] === 1) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
      }

      mx = Math.max(dp[i][j], mx);
    }
  }

  console.log(mx ** 2);
};

solution(`4 4
0100
0111
1110
0010`);
