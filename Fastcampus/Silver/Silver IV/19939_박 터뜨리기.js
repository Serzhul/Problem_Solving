const solution = (input) => {
  let [N, K] = input.toString().trim().split(" ").map(Number);

  // 안되는 경우 N이 1~K까지의 합보다 작은 경우
  let sum = 0;

  for (let i = 1; i <= K; i += 1) {
    sum += i;
  }

  if (sum > N) console.log(-1);
  else {
    N -= sum;
    if (N % K === 0) console.log(K - 1);
    else console.log(K);
  }
};

solution(`10 4`);
