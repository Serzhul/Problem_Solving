const solution = (input) => {
  /* 제출 버전
    let fs = require('fs');
    fs.readFileSync('/dev/stdin')
  */

  let n = Number(input.toString());

  let answer = "";

  for (let i = 1; i <= n; i += 1) {
    let star = "";
    for (let j = 1; j <= i; j += 1) {
      star += "*";
    }
    answer += `${star}\n`;
  }

  console.log(answer);
};

solution(`5`);
