const solution = (input) => {
  const [[N, M], nums] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  let cnt = 0;
  let end = 0;
  let sum = 0;

  for (let start = 0; start < N; start += 1) {
    while (sum < M && end < N) {
      sum += nums[end];
      end += 1;
    }

    if (sum === M) cnt += 1;
    sum -= nums[start];
  }

  console.log(cnt);
};

solution(`10 5
1 2 3 4 2 5 3 1 1 2`);
