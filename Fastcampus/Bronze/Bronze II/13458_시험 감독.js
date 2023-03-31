const solution = (input) => {
  const [[N], applicants, [B, C]] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  let count = 0;

  for (let i = 0; i < N; i += 1) {
    const cur = applicants[i] - B;
    count += 1;

    if (cur > 0) {
      count += Math.floor(cur / C);

      if (cur % C > 0) count += 1;
    }
  }

  console.log(count);
};

solution(`1
1
1 1`);
