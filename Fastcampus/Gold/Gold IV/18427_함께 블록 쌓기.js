const solution = (input) => {
  const [[N, M, H], ...blocks] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  const dp = new Array(H + 1).fill(0);

  dp[0] = 1;

  for (let i = 0; i < N; i += 1) {
    const data = [];

    for (let j = 0; j <= H; j += 1) {
      for (let k = 0; k < blocks.length; k += 1) {
        if (dp[j] !== 0 && j + blocks[i][k] <= H) {
          data.push([j + blocks[i][k], dp[j]]);
        }
      }
    }

    for (const [height, value] of data) {
      dp[height] = (dp[height] + value) % 10007;
    }
  }

  console.log(dp[H]);
};

solution(`3 3 5
2 3 5
3 5
1 2 3`);
