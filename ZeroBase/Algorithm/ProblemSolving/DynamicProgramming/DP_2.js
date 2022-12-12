// 최소 점프
// N칸으로 이루어진 징검다리를 점프해서 마지막까지 가야한다.
// k번째 칸

const N = 10;
const arr = [1, 2, 0, 1, 3, 2, 1, 5, 4, 2];

const dp = Array.from({ length: N + 1 }, () => Infinity);

dp[0] = 0;

for (let i = 0; i < N; i += 1) {
  const jump = arr[i]; // 점프할 수 있는 거리

  for (let j = 1; j <= jump; j += 1) {
    if (i + j <= N) {
      // i+j의 위치에 도착하기 위한 최소 점프 횟수를 저장하면서 갱신
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
    }
  }
}

console.log(dp);
