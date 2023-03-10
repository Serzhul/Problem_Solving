const solution = (input) => {
  /* 제출 버전
    let fs = require('fs');
    let [A,B] = fs.readFileSync('/dev/stdin').toString().split(' ').map((el)=> Number(el));

    let answer = "";

    answer += `${A + B}\n`;
    answer += `${A - B}\n`;
    answer += `${A * B}\n`;
    answer += `${Math.floor(A / B)}\n`;
    answer += `${A % B}\n`;

    console.log(answer);
  */

  const [A, B] = input
    .toString()
    .trim()
    .split(" ")
    .map((el) => Number(el));

  let answer = "";

  answer += `${A + B}\n`;
  answer += `${A - B}\n`;
  answer += `${A * B}\n`;
  answer += `${parseInt(A / B, 10)}\n`;
  answer += `${A % B}\n`;

  console.log(answer);
};

solution(`7 3`);
