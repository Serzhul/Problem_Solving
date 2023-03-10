const solution = (input) => {
  let [N, numStr] = input.toString().split("\n");

  let sum = 0;

  for (let i = 0; i < N; i += 1) {
    sum += Number(numStr[i]);
  }

  console.log(sum);
};

solution(`11
10987654321`);
