const solution = (input) => {
  const [N, S] = input.toString().trim().split("\n");

  const answers = [...S];

  let bonus = 0;
  let totalPoint = 0;

  for (let i = 0; i < N; i += 1) {
    if (answers[i] === "O") {
      totalPoint += i + 1;
      totalPoint += bonus;
      bonus += 1;
    } else {
      bonus = 0;
    }
  }

  return totalPoint;
};
solution(`8
XOOOXOOX`);
