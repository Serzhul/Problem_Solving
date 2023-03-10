const solution = (input) => {
  /* 제출 버전
    let fs = require('fs');
    fs.readFileSync('/dev/stdin')
  */

  let [A, B, C] = input.toString().split(" ").map(Number);

  if (A === B && B === C) {
    console.log(10000 + A * 1000);
    return;
  }

  if (A === B && B !== C) {
    console.log(1000 + A * 100);
    return;
  }
  if (A === C && B !== C) {
    console.log(1000 + A * 100);
    return;
  }
  if (B === C && A !== B) {
    console.log(100 + B * 100);
    return;
  }

  if (A !== B && B !== C) {
    console.log(Math.max(A, B, C) * 100);
  }
};

solution(`6 2 5`);
