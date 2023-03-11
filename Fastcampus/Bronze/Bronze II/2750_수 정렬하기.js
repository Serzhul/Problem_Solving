const solution = (input) => {
  const [N, ...nums] = input.toString().trim().split("\n").map(Number);

  let answer = "";

  nums.sort((a, b) => a - b);

  nums.forEach((num) => {
    answer += `${num}\n`;
  });

  console.log(answer);
};

solution(`5
5
2
3
4
1`);
