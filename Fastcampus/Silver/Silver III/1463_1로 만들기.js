// const solution = (input) => {
//   const [N] = input.toString().trim().split("\n").map(Number);

//   const dp = Array(N + 1).fill(0);

//   for (let x = 2; x <= N; x += 1) {
//     dp[x] = dp[x - 1];
//     if (x % 2 === 0) {
//       dp[x] = Math.min(dp[x], dp[parseInt(x / 2, 10)]);
//     }
//     if (x % 3 === 0) {
//       dp[x] = Math.min(dp[x], dp[parseInt(x / 3, 10)]);
//     }
//     dp[x] += 1;
//   }

//   console.log(dp[N]);
// };

// 복습 : 거꾸로 생각해보기
const solution = (input) => {
  const [N] = input.toString().trim().split("\n").map(Number);

  const dp = Array(N + 1).fill(0);

  for (let x = 2; x <= N; x += 1) {
    dp[x] = dp[x - 1];
    if (x % 3 === 0) {
      dp[x] = Math.min(dp[x], dp[parseInt(x / 3, 10)]);
    }

    if (x % 2 === 0) {
      dp[x] = Math.min(dp[x], dp[parseInt(x / 2, 10)]);
    }

    dp[x] += 1;
  }

  console.log(dp);
};

solution(`10`);
