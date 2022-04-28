// 각 셀의 가장 가까운 0 의 거리를 반환하라.
// 거리 구하기 => BFS 고려

// Solution1 : DFS => 시간초과

// const updateMatrix = (mat) => {
//   const m = mat.length;
//   const n = mat[0].length;

//   const dfs = (
//     low,
//     col,
//     visited = Array.from({ length: m }, () => Array(n).fill(false))
//   ) => {
//     if (low < 0 || col < 0 || low >= m || col >= n || visited[low][col])
//       return 10000;

//     if (!mat[low][col]) return 0;

//     visited[low][col] = true;

//     const val =
//       1 +
//       Math.min(
//         dfs(low + 1, col, visited),
//         dfs(low - 1, col, visited),
//         dfs(low, col + 1, visited),
//         dfs(low, col - 1, visited)
//       );

//     visited[low][col] = false;

//     return val;
//   };

//   for (let i = 0; i < m; i += 1) {
//     for (let j = 0; j < n; j += 1) {
//       mat[i][j] = dfs(i, j);
//     }
//   }

//   return mat;
// };

// Solution2 : BFS

const updateMatrix = (mat) => {
  const n = mat.length;
  const m = mat[0].length;

  const queue = [];

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      if (mat[i][j] === 0) {
        queue.push([i, j, 0]);
      } else {
        mat[i][j] = Infinity;
      }
    }
  }

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  while (queue.length) {
    const [low, col, val] = queue.shift();

    if (mat[low][col] > val) {
      mat[low][col] = val;
    }

    for (let i = 0; i < 4; i += 1) {
      const nLow = low + dx[i];
      const nCol = col + dy[i];

      const next = [nLow, nCol, val + 1];

      if (nLow >= 0 && nLow < n && nCol >= 0 && nCol < m) {
        if (mat[nLow][nCol] === Infinity) {
          queue.push(next);
        }
      }
    }
  }

  return mat;
};

updateMatrix([
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
]);
