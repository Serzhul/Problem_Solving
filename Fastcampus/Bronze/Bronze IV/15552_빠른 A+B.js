const solution = (input) => {
  /* 제출 버전
    let fs = require('fs');
    fs.readFileSync('/dev/stdin')
  */

  let [T, ...testCases] = input
    .toString()
    .split("\n")
    .map((el, idx) => {
      if (idx >= 1) return el.split(" ").map(Number);
      return el;
    });

  let answer = "";

  for (let i = 0; i < T; i += 1) {
    answer += `${testCases[i][0] + testCases[i][1]}\n`;
  }

  console.log(answer);
};

solution(`5
1 1
12 34
5 500
40 60
1000 1000`);
