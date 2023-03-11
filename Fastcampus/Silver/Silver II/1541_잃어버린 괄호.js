// const solution = (input) => {
//   const [statement] = input.toString().trim().split("\n");

//   const splitted = statement.split("-").map((el) => {
//     let sum = 0;
//     if (el.includes("+")) {
//       el.split("+").forEach((num) => {
//         sum += Number(num);
//       });
//     } else sum = Number(el);

//     return sum;
//   });

//   let ans = splitted[0];

//   for (let i = 1; i < splitted.length; i += 1) {
//     ans -= splitted[i];
//   }

//   console.log(ans);
// };

// 다른 솔루션 :
// 문제 해결 아이디어 : - 연산자를 기준으로 가장 많은 수를 묶기
//

const solution = (input) => {
  const [statement] = input.toString().trim().split("\n");

  const groups = statement.split("-");
  let ans = 0;

  for (let i = 0; i < groups.length; i += 1) {
    const cur = groups[i]
      .split("+")
      .map(Number)
      .reduce((a, b) => a + b);

    if (i === 0) ans += cur;
    else ans -= cur;
  }
};

solution(`100-2+5-4+34`);
