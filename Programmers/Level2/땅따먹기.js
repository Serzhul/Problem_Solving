function solution(land) {
    const dp = Array.from(land);

    for (let i = 1; i < land.length; i += 1) {
        dp[i][0] += Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]);
        dp[i][1] += Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3]);
        dp[i][2] += Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][3]);
        dp[i][3] += Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
    }

    return Math.max(...dp[land.length - 1]);
}

solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
]);
