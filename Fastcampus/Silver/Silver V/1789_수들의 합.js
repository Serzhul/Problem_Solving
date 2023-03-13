const solution = (input) => {
  const [S] = input.toString().trim().split("\n").map(Number);

  // 서로 다른 N개의 자연수의 합이 S라고 할 때, N의 최댓값은?

  let N = 1;
  let sum = 0;
  let ans = 0;

  while (sum < S) {
    N += 1;
    ans += 1;
    sum += N;
  }

  console.log(ans);
};

solution(`200`);
