const solution = (input) => {
    const N = Number(input.toString().trim());

    const mod = 1000000000;

    const dp = Array.from({ length: N + 1 }, () => Array(10));

    dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    dp[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1];

    for (let i = 3; i <= N; i += 1) {
        for (let j = 0; j <= 9; j += 1) {
            if (j === 0) {
                dp[i][j] = dp[i - 1][j + 1] % mod;
            } else if (j >= 1 && j <= 8) {
                dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % mod;
            } else {
                dp[i][j] = dp[i - 1][j - 1] % mod;
            }
        }
    }

    let sum = 0;
    for (let i = 0; i <= 9; i += 1) {
        sum += dp[N][i];
    }

    console.log(sum % mod);
};
solution(`2`);
