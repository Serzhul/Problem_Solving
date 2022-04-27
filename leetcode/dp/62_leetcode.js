// Solution 1

// const uniquePaths = (m, n) => {
//   if (m === 1 || n === 1) return 1;
//   const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

//   dp[m][n] = 0;

//   for (let i = 1; i < m; i += 1) {
//     dp[i][n] = 1;
//   }

//   for (let j = n - 1; j >= 0; j -= 1) {
//     dp[m][j] = 1;
//   }

//   for (let i = m - 1; i > 0; i -= 1) {
//     for (let j = n - 1; j >= 0; j -= 1) {
//       dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
//     }
//   }

//   return dp[1][1];
// };

// Solution 2 : 공간복잡도 최적화

const uniquePaths = (m, n) => {
  const dp = new Array(n + 1).fill(1);

  for (let i = m - 1; i > 0; i -= 1) {
    for (let j = n - 1; j > 0; j -= 1) {
      dp[j] += dp[j + 1];
    }
  }

  return dp[1];
};

uniquePaths(3, 7);
