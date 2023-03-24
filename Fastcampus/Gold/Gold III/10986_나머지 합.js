const solution = (input) => {
  let [[N, M], nums] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  const sum = [0];
  nums = [0, ...nums];

  for (let i = 1; i <= N; i += 1) {
    sum[i] = sum[i - 1] + nums[i];
  }
  const processed = [];
  const counter = {};

  for (let i = 0; i <= N; i += 1) {
    processed[i] = sum[i] % M;
    if (processed[i] in counter) counter[processed[i]] += 1;
    else counter[processed[i]] = 1;
  }

  let res = 0;

  for (let i = 0; i < M; i += 1) {
    if (i in counter) res += parseInt((counter[i] * (counter[i] - 1)) / 2, 10);
  }

  console.log(res);
};

solution(`5 3
1 2 3 1 2`);
