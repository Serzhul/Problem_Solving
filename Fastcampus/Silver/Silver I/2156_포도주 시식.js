// const solution = (input) => {
//   const [n, ...wines] = input.toString().trim().split("\n").map(Number);

//   const dp = Array.from({ length: n }, () => 0);

//   dp[0] = wines[0];
//   dp[1] = dp[0] + wines[1];
//   dp[2] = Math.max(
//     wines[0] + wines[1],
//     wines[0] + wines[2],
//     wines[1] + wines[2]
//   );

//   for (let i = 3; i < n; i += 1) {
//     dp[i] = dp[i - 1];
//     dp[i] = Math.max(dp[i], wines[i] + dp[i - 2]);
//     dp[i] = Math.max(dp[i], wines[i] + wines[i - 1] + dp[i - 3]);
//   }

//   console.log(dp[n - 1]);
// };

// 복습
const solution = (input) => {
  const [n, ...wines] = input.toString().trim().split("\n").map(Number);

  const dp = Array.from({ length: n }, () => 0);

  dp[0] = wines[0];
  dp[1] = dp[0] + wines[1];
  dp[2] = Math.max(dp[1], wines[0] + wines[2], wines[1] + wines[2]);

  for (let i = 3; i < n; i += 1) {
    dp[i] = dp[i - 1];
    dp[i] = Math.max(dp[i], dp[i - 2] + wines[i]);
    dp[i] = Math.max(dp[i], wines[i] + wines[i - 1] + dp[i - 3]);
  }

  console.log(dp[n - 1]);
};

solution(`6
6
10
13
9
8
1`);
