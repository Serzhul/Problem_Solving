// Solution 1

// const solution = (input) => {
//   let [A, B] = input.toString().trim().split(" ").map(Number);

//   /*
//   B를 최대한 A로 나눈다.
//   더 나눌 수 없는 경우 1을 뺀다.
//   그 값을 또 A로 최대한 나눈다.
//   0이 될 때까지 반복한다. (만약 0이 안되면 -1을 반환한다)
//   */

//   let ans = 1;

//   while (B > A) {
//     if (B % 2 === 0) B /= 2;
//     else {
//       B += "";
//       if (B[B.length - 1] === "1") {
//         B = Number(B.slice(0, B.length - 1));
//       } else {
//         console.log(-1);
//         return;
//       }
//     }
//     ans += 1;
//   }

//   if (B !== A) console.log(-1);
//   else console.log(ans);
// };

// Solution2 : 로직 동일, 코드 스타일 다름

// const solution = (input) => {
//   let [A, B] = input.toString().trim().split(" ").map(Number);

//   /*
//   B를 최대한 A로 나눈다.
//   더 나눌 수 없는 경우 1을 뺀다.
//   그 값을 또 A로 최대한 나눈다.
//   0이 될 때까지 반복한다. (만약 0이 안되면 -1을 반환한다)
//   */

//   let ans = 1;
//   let flag = false;

//   while (A <= B) {
//     if (A === B) {
//       flag = true;
//       break;
//     }
//     if (B % 2 === 0) B = parseInt(B / 2);
//     else if (B % 10 === 1) B = parseInt(B / 10);
//     else break;
//     ans += 1;
//   }

//   if (flag) console.log(ans);
//   else console.log(-1);
// };

// Solution 3 : BFS
const solution = (input) => {
  let [A, B] = input.toString().trim().split(" ").map(Number);

  const queue = [];

  const checked = {};

  queue.push([A * 2, 0]);
  queue.push([Number(`${A}1`), 0]);

  while (queue.length) {
    const [cur, time] = queue.shift();

    checked[cur] = time + 1;

    if (cur === B) {
      break;
    }

    if (!checked[cur * 2] && cur * 2 <= B) {
      queue.push([cur * 2, time + 1]);
    }

    if (!checked[Number(`${cur}1`)] && Number(`${cur}1`) <= B) {
      queue.push([Number(`${cur}1`), time + 1]);
    }
  }

  if (!checked[B]) console.log(-1);
  else console.log(checked[B] + 1);
};

solution(`2 162`);
