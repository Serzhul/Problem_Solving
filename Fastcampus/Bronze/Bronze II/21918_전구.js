const solution = (input) => {
  const [[N, M], s, ...orders] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  for (let i = 0; i < M; i += 1) {
    const [a, b, c] = orders[i];

    if (a === 1) {
      s[b - 1] = c;
    } else {
      for (let j = b - 1; j <= c - 1; j += 1) {
        if (a === 2) s[j] = s[j] === 0 ? 1 : 0;
        else if (a === 3) s[j] = 0;
        else s[j] = 1;
      }
    }
  }

  console.log(s.join(" "));
};

solution(`8 6
0 0 0 0 0 0 0 0
1 2 1
1 4 1
2 2 4
2 1 7
3 5 8
4 4 6`);
