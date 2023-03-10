// 문제 풀이 핵심 아이디어
// 등차수열의 합 공식 이용 가능
// 1항부터 N항까지의 합을 Sn이라 할때, 첫쨰항이 a, 마지막 항이 Sn이면
// Sn = N(a+l) / 2

// const solution = (input) => {
//   /* 제출 버전
//     let fs = require('fs');
//     fs.readFileSync('/dev/stdin')
//   */

//   let n = Number(input.toString());
//   let sum = 0;

//   for (let i = 1; i <= n; i += 1) {
//     sum += i;
//   }

//   console.log(sum);
// };

const solution = (input) => {
  /* 제출 버전
    let fs = require('fs');
    fs.readFileSync('/dev/stdin')
  */

  let n = Number(input.toString());

  console.log((n * (n + 1)) / 2);
};

solution(`3`);
