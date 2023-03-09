const n = 4;
const computers = [
  [1, 1, 1, 0],
  [1, 1, 1, 0],
  [1, 1, 1, 0],
  [0, 0, 0, 1],
];

// 실패: 원인 불명
// function solution(n, computers) {
//   // 네트워크의 개수 => 간접적으로라도 연결되어 있으면 같은 네트워크 상에 있음 즉, 연결되지 않고 따로 떨어진 노드는 하나의 네트워크로 봐야함

//   const graph = {};

//   let answer = 1;

//   for (let i = 0; i < n; i += 1) {
//     graph[i] = [];
//   }

//   for (let i = 0; i < n; i += 1) {
//     for (let j = 0; j < n; j += 1) {
//       if (computers[i][j] && i !== j) {
//         graph[i].push(j);
//       }
//     }
//   }

//   Object.values(graph).forEach((value) => {
//     if (value.length === 0) answer += 1;
//   });

//   return answer > n ? answer - 1 : answer;
// }

function makeZero(coms, y, x, n) {
  coms[y][x] = 0;
  for (let i = 0; i < n; i += 1) {
    if (coms[y][i] === 1) makeZero(coms, y, i, n);
    if (coms[i][x] === 1) makeZero(coms, i, x, n);
  }
}

function solution(n, computers) {
  // 네트워크의 개수 => 간접적으로라도 연결되어 있으면 같은 네트워크 상에 있음 즉, 연결되지 않고 따로 떨어진 노드는 하나의 네트워크로 봐야함

  let answer = 0;

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      console.log(computers);
      if (computers[i][j] === 1) {
        answer += 1;
        makeZero(computers, i, j, n);
      }
    }
  }

  return answer;
}

console.log(solution(n, computers));
