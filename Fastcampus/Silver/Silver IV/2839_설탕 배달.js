const solution = (input) => {
  const [N] = input.toString().trim().split("\n").map(Number);

  let ans = 0;
  let sugars = N;

  while (sugars > 0) {
    if (sugars % 5 === 0) {
      sugars -= 5;
      ans += 1;
    } else {
      sugars -= 3;
      ans += 1;
    }
  }

  if (sugars !== 0) console.log(-1);
  else console.log(ans);
};

solution(`11`);
