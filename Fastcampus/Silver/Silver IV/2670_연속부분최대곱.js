const solution = (input) => {
  const [N, ...nums] = input.toString().trim().split("\n").map(Number);

  const dp = Array.from({ length: N + 1 }, () => 0);

  dp[0] = nums[0];

  let max = 0;

  for (let i = 1; i < N; i += 1) {
    dp[i] = Math.max(nums[i], dp[i - 1] * nums[i]);

    max = Math.max(max, dp[i]);
  }

  console.log(max.toFixed(3));
};

solution(`8
1.1
0.7
1.3
0.9
1.4
0.8
0.7
1.4`);
