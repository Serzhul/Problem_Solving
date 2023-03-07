const priorities = [2, 1, 3, 2];
const location = 2;

// function solution(priorities, location) {
//   const queue = [];
//   let max = Math.max(...priorities);
//   let count = 0;

//   for (let i = 1; i <= priorities.length; i++) {
//     queue.push(i);
//   }
//   let target = queue[location];
//   while (queue.length) {
//     if (priorities[0] === max) {
//       count++;
//       if (queue.shift() === target) return count;
//       priorities.shift();
//       max = Math.max(...priorities);
//     } else {
//       queue.push(queue.shift());
//       priorities.push(priorities.shift());
//     }
//   }
// }

function solution(priorities, location) {
  // 우선순위 최대값 구하기
  let max = Math.max(...priorities);
  const queue = Array.from({ length: priorities.length }, (_, i) => i + 1);
  let count = 0;

  const target = queue[location];
  while (queue.length) {
    if (priorities[0] === max) {
      count += 1;
      if (queue.shift() === target) return count;
      priorities.shift();
      max = Math.max(...priorities);
    } else {
      queue.push(queue.shift());
      priorities.push(priorities.shift());
    }
  }
}

console.log(solution(priorities, location));
