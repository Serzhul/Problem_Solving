const solution = (input) => {
  /* 제출 버전
    let fs = require('fs');
      const [H, M] = fs.readFileSync('/dev/stdin')    .toString()
    .trim()
    .split(" ")
    .map((el) => Number(el));
    
  const curTime = H * 60 + M;
  const targetTime = curTime - 45;
  let hour = parseInt(targetTime / 60, 10);
  let min = targetTime % 60;
  if (targetTime < 0) {
    hour += 23;
    min += 60;
  }

  console.log(`${hour} ${min}`);
  */

  let [H, M] = input
    .toString()
    .trim()
    .split(" ")
    .map((el) => Number(el));

  if (M < 45) {
    H -= 1;
    M += 15;
    if (H < 0) H = 23;
  } else M -= 45;

  console.log(`${H} ${M}`);
};
solution(`23 40`);
