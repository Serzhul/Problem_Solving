const solution = (input) => {
  const [[N, L, K], ...problems] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map((num) => Number(num)));

  // Solution 1

  // const solved = Array.from({ length: N }, () => false);

  // let point = 0;

  // let num = 0;

  // let checkedAll = false;

  // let canSolve = K;

  // while (canSolve > 0) {
  //   const [low, high] = problems[num];

  //   if (high <= L && !solved[num]) {
  //     point += 140;
  //     canSolve -= 1;
  //     solved[num] = true;
  //   } else if (checkedAll && low <= L && !solved[num]) {
  //     point += 100;
  //     canSolve -= 1;
  //     solved[num] = true;
  //   }

  //   num += 1;

  //   if (num === N) {
  //     if (checkedAll) break;
  //     checkedAll = true;
  //     num = 0;
  //   }
  // }
  // console.log(point);

  // Solution 2

  let easy = 0;
  let hard = 0;

  for (let i = 0; i < N; i += 1) {
    const [sub1, sub2] = problems[i];

    if (sub2 <= L) {
      hard += 1;
    } else if (sub1 <= L) {
      easy += 1;
    }
  }

  let point = 0;

  point += Math.min(hard, K) * 140;

  if (hard < K) {
    point += Math.min(K - hard, easy) * 100;
  }

  console.log(point);
};

solution(`8 9 5
1 8
3 10
4 5
5 20
7 12
8 15
9 50
14 14`);
