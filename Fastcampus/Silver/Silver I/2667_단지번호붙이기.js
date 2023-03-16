// Solution1  : 직접 풀이
// const solution = (input) => {
//   const [N, ...maps] = input
//     .toString()
//     .trim()
//     .split("\n")
//     .map((el, idx) => {
//       if (idx === 0) return Number(el);
//       return el.split("").map(Number);
//     });

//   let ans = "";

//   const estates = [];

//   const visited = Array.from({ length: N }, () =>
//     Array.from({ length: N }, () => false)
//   );

//   const dx = [1, 0, -1, 0];
//   const dy = [0, 1, 0, -1];

//   let max = 0;
//   let count = 0;

//   const dfs = (row, col) => {
//     count += 1;
//     max = Math.max(max, count);
//     maps[row][col] = 0;

//     for (let i = 0; i < 4; i += 1) {
//       const nRow = row + dx[i];
//       const nCol = col + dy[i];

//       if (
//         nRow >= 0 &&
//         nRow < N &&
//         nCol >= 0 &&
//         nCol < N &&
//         maps[nRow][nCol] === 1 &&
//         !visited[nRow][nCol]
//       ) {
//         visited[nRow][nCol] = true;
//         dfs(nRow, nCol, count + 1);
//         visited[nRow][nCol] = false;
//       }
//     }
//   };

//   for (let i = 0; i < N; i += 1) {
//     for (let j = 0; j < N; j += 1) {
//       if (maps[i][j] === 1) {
//         dfs(i, j, 1);
//         estates.push(max);
//         max = 0;
//         count = 0;
//       }
//     }
//   }

//   ans += `${estates.length}\n`;

//   estates
//     .sort((a, b) => a - b)
//     .forEach((num) => {
//       ans += `${num}\n`;
//     });

//   console.log(ans);
// };

// Solution2 다른 풀이 예시
const solution = (input) => {
  const [N, ...maps] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split("").map(Number);
    });

  function dfs(x, y) {
    if (x < 0 || x >= N || y < 0 || y >= N) return 0;
    if (maps[x][y] >= 1) {
      maps[x][y] = -1;
      let res = 1;
      res += dfs(x - 1, y);
      res += dfs(x, y - 1);
      res += dfs(x + 1, y);
      res += dfs(x, y + 1);

      return res;
    }

    return 0;
  }

  const answer = [];

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < N; j += 1) {
      const cur = dfs(i, j);
      if (cur > 0) answer.push(cur);
    }
  }

  answer.sort((a, b) => a - b);
  console.log(`${answer.length}\n${answer.join("\n")}`);
};

solution(`7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`);
