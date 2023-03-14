// const solution = (input) => {
//   const [N, budgets, M] = input
//     .toString()
//     .trim()
//     .split("\n")
//     .map((el, idx) => {
//       if (idx === 1) return el.split(" ").map(Number);
//       return Number(el);
//     });

//   let start = 1;
//   let end = budgets.reduce((a, b) => Math.max(a, b)); // 최대값

//   let result = 0;

//   while (start <= end) {
//     const mid = parseInt((start + end) / 2, 10); // 최소값과 최대값의 중간값 찾기
//     let total = 0; // 누적합

//     budgets.forEach((budget) => {
//       total += Math.min(mid, budget);
//     });

//     if (total <= M) {
//       result = mid;
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   console.log(result);
// };

const solution = (input) => {
  const [N, budgets, M] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 1) return el.split(" ").map(Number);
      return Number(el);
    });

  let start = 1;
  let end = Math.max(...budgets);

  let res = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    let total = 0;

    // 중간 값과 budget 사이에서 작은 값을 누적함 => 예산을 최소화하기 위해
    budgets.forEach((budget) => {
      total += Math.min(mid, budget);
    });

    if (total <= M) {
      res = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(res);
};

solution(`5
70 80 30 40 100
450`);
