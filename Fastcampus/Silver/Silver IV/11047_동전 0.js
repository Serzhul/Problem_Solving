const solution = (input) => {
  const [[N, K], ...coins] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return el.split(" ").map(Number);
      return Number(el);
    });

  let ans = 0;
  let leftChanges = K;

  for (let i = N - 1; i >= 0; i -= 1) {
    while (leftChanges >= coins[i]) {
      ans += 1;
      leftChanges -= coins[i];
    }
  }

  console.log(ans);
};

solution(`10 4790
1
5
10
50
100
500
1000
5000
10000
50000`);
