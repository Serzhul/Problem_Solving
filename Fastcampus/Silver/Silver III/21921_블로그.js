const solution = (input) => {
  const [[N, X], visitors] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  let start = 0;
  let end = X - 1;
  let sum = 0;

  for (let i = 0; i < X; i += 1) {
    sum += visitors[i];
  }

  let periods = 1;
  let maxVisitors = sum;

  while (end < N - 1) {
    sum -= visitors[start];
    start += 1;
    end += 1;
    sum += visitors[end];

    if (sum > maxVisitors) {
      maxVisitors = sum;
      periods = 1;
    } else if (sum === maxVisitors) {
      periods += 1;
    }
  }

  if (maxVisitors === 0) console.log("SAD");
  else {
    console.log(`${maxVisitors}\n${periods}`);
  }
};

solution(`1 1
1`);
