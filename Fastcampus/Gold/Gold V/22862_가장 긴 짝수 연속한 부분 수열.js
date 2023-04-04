const solution = (input) => {
  const [[N, K], nums] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  let res = 0;
  let eraseCnt = 0;

  for (let start = 0, end = 0; start < N; start += 1) {
    while (end < N) {
      if (nums[end] % 2 === 0) end += 1;
      else {
        if (eraseCnt === K) break;

        eraseCnt += 1;
        end += 1;
      }
    }

    res = Math.max(res, end - start - eraseCnt);

    if (nums[start] % 2 === 1) eraseCnt -= 1;
  }

  console.log(res);
};

solution(`8 2
1 2 3 4 5 6 7 8`);
