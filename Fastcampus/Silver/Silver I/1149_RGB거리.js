const solution = (input) => {
  const [N, ...houses] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  const dp = Array.from({ length: N }, () =>
    Array.from({ length: 3 }, () => 0)
  );

  // 1번째 집에서 R,G,B를 각각 선택했을 경우의 비용
  dp[0][0] = houses[0][0];
  dp[0][1] = houses[0][1];
  dp[0][2] = houses[0][2];

  for (let i = 1; i < N; i += 1) {
    dp[i][0] = houses[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = houses[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = houses[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  }

  console.log(Math.min(...dp[N - 1]));
};

solution(`3
1 100 100
100 100 100
1 100 100`);
