const solution = (input) => {
  const [[N, K], [...nums]] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  let answer = "";

  nums.sort((a, b) => a - b);

  answer += nums[K - 1];

  console.log(answer);
};

solution(`5 2
4 1 2 3 5`);
