// const solution = (input) => {
//   const [[N, L, R], ...people] = input
//     .toString()
//     .trim()
//     .split("\n")
//     .map((el) => el.split(" ").map(Number));

//   const dx = [1, 0, -1, 0];
//   const dy = [0, 1, 0, -1];

//   let totalCount = 0;

//   function bfs(row, col, index, union) {
//     const united = [[row, col]];
//     const queue = [];
//     queue.push([row, col]);
//     union[row][col] = index; // 현재 연합의 번호 할당
//     let sum = people[row][col]; // 현재 연합의 전체 인구 수
//     let cnt = 1; // 현재 연합의 국가 수

//     while (queue.length) {
//       const [x, y] = queue.shift();

//       for (let i = 0; i < 4; i += 1) {
//         const nx = x + dx[i];
//         const ny = y + dy[i];

//         if (nx >= 0 && ny >= 0 && nx < N && ny < N && union[nx][ny] === -1) {
//           const diff = Math.abs(people[nx][ny] - people[x][y]);

//           if (L <= diff && diff <= R) {
//             queue.push([nx, ny]);
//             union[nx][ny] = index;
//             sum += people[nx][ny];
//             cnt += 1;
//             united.push([nx, ny]);
//           }
//         }
//       }
//     }

//     for (let j = 0; j < united.length; j += 1) {
//       const [a, b] = united[j];
//       people[a][b] = Math.floor(sum / cnt);
//     }
//   }

//   while (true) {
//     // 각 나라마다 어떤 연합(숫자)에 속했는지 기록
//     const union = Array.from({ length: N }, () =>
//       Array.from({ length: N }, () => -1)
//     );

//     let idx = 0;

//     for (let i = 0; i < N; i += 1) {
//       for (let j = 0; j < N; j += 1) {
//         if (union[i][j] === -1) {
//           bfs(i, j, idx, union);
//           idx += 1; // 해당 국가에 대한
//         }
//       }
//     }

//     if (idx === N * N) break; // 모든 인구 이동이 끝난 경우
//     totalCount += 1; // 인구 이동 횟수 출력
//   }

//   console.log(totalCount);
// };

const solution = (input) => {
  const [[N, L, R], ...people] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  let totalCount = 0;

  function bfs(row, col, index, union) {
    const united = [[row, col]];
    const queue = [];
    queue.push([row, col]);
    union[row][col] = index;
    let sum = people[row][col];
    let cnt = 1;

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i += 1) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < N && ny >= 0 && ny < N && union[nx][ny] === -1) {
          const diff = Math.abs(people[nx][ny] - people[x][y]);

          if (diff >= L && diff <= R) {
            queue.push([nx, ny]);
            union[nx][ny] = index;
            sum += people[nx][ny];
            cnt += 1;
            united.push([nx, ny]);
          }
        }
      }
    }

    for (let i = 0; i < united.length; i += 1) {
      const [a, b] = united[i];
      people[a][b] = Math.floor(sum / cnt);
    }
  }

  while (true) {
    const union = Array.from({ length: N }, () => Array(N).fill(-1));
    let idx = 0;

    for (let i = 0; i < N; i += 1) {
      for (let j = 0; j < N; j += 1) {
        if (union[i][j] === -1) {
          bfs(i, j, idx, union); // 해당 나라로부터 이동 가능한 나라들을 같은 연합으로 묶는다.
          idx += 1;
        }
      }
    }

    if (idx === N * N) break; // 모든 위치에 대해 연결 요소가
    totalCount += 1;
  }

  console.log(totalCount);
};

solution(`4 10 50
10 100 20 90
80 100 60 70
70 20 30 40
50 20 100 10`);
