const solution = (input) => {
  /* 제출 버전
    let fs = require('fs');
    let [A,B] = fs.readFileSync('/dev/stdin').toString().split('\n');

    let answer = "";

    for (let i = 2; i >= 0; i -= 1) {
      answer += `${A * B[i]}\n`;
    }

    answer += `${A * B}\n`;

    console.log(answer);
  */

  const [A, B] = input.toString().trim().split("\n");

  let answer = "";

  for (let i = 2; i >= 0; i -= 1) {
    answer += `${A * B[i]}\n`;
  }

  answer += `${A * B}\n`;

  console.log(answer);
};

solution(`472
385`);
