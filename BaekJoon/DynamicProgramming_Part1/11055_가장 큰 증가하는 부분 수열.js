const solution = (input) => {
  const [Alen, A] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, i) => (i === 0 ? +el : el.split(" ").map((n) => +n)));

  // DP[i] = i까지 왔을 때 값의 최대

  const dp = JSON.parse(JSON.stringify(A)); // A의 배열 값 복사

  for (let i = 1; i < Alen; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (A[i] > A[j]) {
        // 현재 값이 이전 값들보다 클 경우 (비교하여 최대값 갱신)

        dp[i] = Math.max(A[i] + dp[j], dp[i]);
      }
    }
  }

  console.log(Math.max(...dp));
};

solution(`10
1 100 2 50 60 3 5 6 7 8`);
