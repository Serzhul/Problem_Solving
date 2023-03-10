const solution = (input) => {
  /* 제출 버전
    let fs = require('fs');
    let [score] = fs.readFileSync('/dev/stdin').toString()
    .split("\n")
    .map((el) => Number(el));

  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
  */

  const [score] = input
    .toString()
    .split("\n")
    .map((el) => Number(el));

  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
};

solution(`60`);
