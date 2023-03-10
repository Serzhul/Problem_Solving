const solution = (input) => {
  /* 제출 버전
    let fs = require('fs');
    fs.readFileSync('/dev/stdin')
  */

  let n = Number(input.toString());

  let answer = "";

  for (let i = 1; i <= 9; i += 1) {
    answer += `${n} * ${i} = ${n * i}\n`;
  }

  console.log(answer);
};

solution(`2`);
