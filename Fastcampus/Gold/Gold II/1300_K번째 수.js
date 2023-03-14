const solution = (input) => {
  const [N, k] = input.toString().trim().split("\n").map(Number);

  let start = 1;
  let end = 10 ** 10;

  let ans = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let total = 0;

    // 각 행 마다 mid보다 작은 숫자의 개수를 구하기 위해
    for (let i = 1; i <= N; i += 1) {
      total += Math.min(Math.floor(mid / i), N);
    }

    if (total >= k) {
      ans = mid;
      end = mid - 1;
    } else start = mid + 1;
  }

  console.log(ans);
};

solution(`3
7`);
