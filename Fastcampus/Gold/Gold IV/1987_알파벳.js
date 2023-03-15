// Solution1  : 직접 풀이

// const solution = (input) => {
//   const [[R, C], ...board] = input
//     .toString()
//     .trim()
//     .split("\n")
//     .map((el, idx) => {
//       if (idx === 0) return el.split(" ").map(Number);
//       return el.split("");
//     });

//   const checked = Array.from({ length: R }, () =>
//     Array.from({ length: C }, () => false)
//   );

//   let max = 0;

//   const dx = [0, 1, 0, -1];
//   const dy = [1, 0, -1, 0];

//   const visited = [board[0][0]];

//   const dfs = (row, col) => {
//     max = Math.max(max, visited.length);
//     if (row < 0 || col < 0 || row >= R || col >= C || checked[row][col]) return;

//     checked[row][col] = true;

//     for (let i = 0; i < 4; i += 1) {
//       const newRow = row + dx[i];
//       const newCol = col + dy[i];

//       if (
//         newRow >= 0 &&
//         newCol >= 0 &&
//         newRow < R &&
//         newCol < C &&
//         !checked[newRow][newCol]
//       ) {
//         const cur = board[newRow][newCol];

//         if (!visited.includes(cur)) {
//           visited.push(cur);
//           dfs(newRow, newCol);
//           visited.pop();
//         }
//       }
//     }

//     checked[row][col] = false;
//   };

//   dfs(0, 0);

//   console.log(max);
// };

// Solution2 : 모범답안

const solution = (input) => {
  const [[R, C], ...board] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return el.split(" ").map(Number);
      return el.split("");
    });

  let maxDepth = 0;

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const visited = new Set();

  function dfs(depth, x, y) {
    maxDepth = Math.max(maxDepth, depth);
    for (let i = 0; i < 4; i += 1) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < R &&
        ny < C &&
        !visited.has(board[nx][ny])
      ) {
        visited.add(board[nx][ny]);
        dfs(depth + 1, nx, ny);
        visited.delete(board[nx][ny]);
      }
    }
  }

  visited.add(board[0][0]);

  dfs(1, 0, 0);

  console.log(maxDepth);
};

solution(`5 5
IEFCJ
FHFKC
FFALF
HFGCF
HMCHH`);
