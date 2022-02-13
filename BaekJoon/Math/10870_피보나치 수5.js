const solution = (input) => {
    const n = +input.toString().trim();

    const dp = Array(21);

    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    console.log(dp[n]);
};

solution(`10`);
