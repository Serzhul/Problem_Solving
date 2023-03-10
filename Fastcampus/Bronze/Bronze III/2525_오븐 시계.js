// const solution = (input) => {
//   /* 제출 버전
//     let fs = require('fs');
//   let [[hour, min], cookTime] = fs.readFileSync('/dev/stdin')
//     .toString()
//     .split("\n")
//     .map((el, idx) => {
//       if (idx === 0) return el.split(" ").map((num) => Number(num));
//       return Number(el);
//     });

//   let totalTime = hour * 60 + min + cookTime;

//   let totalHour = parseInt(totalTime / 60, 10);

//   let totalMin = totalTime % 60;

//   if (totalHour >= 24) totalHour %= 24;

//   console.log(`${totalHour} ${totalMin}`);
//   */

//   let [[hour, min], cookTime] = input
//     .toString()
//     .split("\n")
//     .map((el, idx) => {
//       if (idx === 0) return el.split(" ").map((num) => Number(num));
//       return Number(el);
//     });

//   let totalTime = hour * 60 + min + cookTime;

//   let totalHour = parseInt(totalTime / 60, 10);

//   let totalMin = totalTime % 60;

//   if (totalHour >= 24) totalHour %= 24;

//   console.log(`${totalHour} ${totalMin}`);
// };

// 모범답안

const solution = (input) => {
  let fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");

  let [a, b] = input[0].split(" ").map(Number);
  let c = Number(input[1]);

  let totalMinute = a * 60 + b + c;
  totalMinute %= 1440;
  let hour = parseInt(totalMinute / 60);
  let minute = totalMinute % 60;

  console.log(`${hour} ${minute}`);
};

solution(`23 59
80
`);
