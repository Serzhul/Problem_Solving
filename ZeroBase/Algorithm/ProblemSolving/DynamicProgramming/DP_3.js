// 포도주 시식
// 연속으로 3잔을 모두 마실 수는 없을 때 최대로 마실 수 있는 포도주 양 구하기

const N = 6;
const arr = [0, 6, 10, 13, 9, 8, 1];

// i번째 까지 마셨을 때 최대로 마실 수 있는 포도주의 양 구하기
const dp = Array.from({ length: arr }, () => 0);

dp[0] = 0;
dp[1] = arr[1];
dp[2] = arr[1] + arr[2];

for (let i = 3; i < N; i += 1) {
  dp[i] = Math.max(
    dp[i - 2] + arr[i],
    dp[i - 3] + arr[i - 1] + arr[i],
    dp[i - 1]
  );
}

console.log(dp);
