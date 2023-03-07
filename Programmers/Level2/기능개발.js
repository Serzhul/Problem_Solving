const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

// function solution(progresses, speeds) {
//   let queue = Array.from(progresses);
//   let answer = [];

//   while (queue.length > 0) {
//     for (let i = 0; i < progresses.length; i++) {
//       queue[i] += speeds[i];
//     }
//     if (queue[0] >= 100) {
//       let count = 0;
//       while (queue[0] >= 100) {
//         progresses.shift();
//         speeds.shift();
//         queue.shift();
//         count++;
//       }

//       answer.push(count);
//     }
//   }
//   return answer;
// }

function solution(progresses, speeds) {
  // 각 배포마다 몇 개의 기능이 배포되는지 구하기
  const queue = [...progresses];
  const res = [];

  while (queue.length) {
    for (let i = 0; i < speeds.length; i += 1) {
      queue[i] += speeds[i];
    }

    if (queue[0] >= 100) {
      let count = 0;
      while (queue[0] >= 100) {
        progresses.shift();
        queue.shift();
        speeds.shift();
        count += 1;
      }
      res.push(count);
    }
  }

  return res;
}

console.log(solution(progresses, speeds));
