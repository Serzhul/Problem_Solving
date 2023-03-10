const solution = (input) => {
  /* 제출 버전
    let fs = require('fs');
    let [A,B] = fs.readFileSync('/dev/stdin').toString().split(' ').map((el)=> Number(el));

    console.log(A+B)
  */

  const [A, B] = input
    .toString()
    .trim()
    .split(" ")
    .map((el) => Number(el));

  console.log(A + B);
};

solution(`1 2`);
