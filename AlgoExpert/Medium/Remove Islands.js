const matrix = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 0, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
];

// function removeIslands(matrix) {
//   const [n, m] = [matrix.length, matrix[0].length];
//   let land = Array.from({ length: n }, () =>
//     Array.from({ length: m }, () => false)
//   );

//   function dfs(matrix, land, i, j) {
//     if (i < 0 || i >= n || j < 0 || j >= m || land[i][j] || !matrix[i][j])
//       return;

//     land[i][j] = true;

//     dfs(matrix, land, i + 1, j);
//     dfs(matrix, land, i, j + 1);
//     dfs(matrix, land, i - 1, j);
//     dfs(matrix, land, i, j - 1);
//   }

//   for (let i = 0; i < m; i += 1) {
//     if (matrix[0][i]) dfs(matrix, land, 0, i);

//     if (matrix[n - 1][i]) dfs(matrix, land, n - 1, i);
//   }

//   for (let i = 1; i < n - 1; i += 1) {
//     if (matrix[i][0]) dfs(matrix, land, i, 0);

//     if (matrix[i][m - 1]) dfs(matrix, land, i, m - 1);
//   }

//   for (let i = 1; i < n - 1; i += 1) {
//     for (let j = 1; j < m - 1; j += 1) {
//       if (!land[i][j]) matrix[i][j] = 0;
//     }
//   }

//   return matrix;
// }

// 복습 1
function removeIslands(matrix) {
  const [row, col] = [matrix.length, matrix[0].length];
  const landCheck = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => false)
  );

  const dfs = (matrix, landCheck, i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= row ||
      j >= col ||
      matrix[i][j] !== 1 ||
      landCheck[i][j]
    )
      return;

    landCheck[i][j] = true;

    dfs(matrix, landCheck, i + 1, j);
    dfs(matrix, landCheck, i, j + 1);
    dfs(matrix, landCheck, i - 1, j);
    dfs(matrix, landCheck, i, j - 1);
  };

  for (let i = 0; i < col; i += 1) {
    if (matrix[0][i]) dfs(matrix, landCheck, 0, i);

    if (matrix[row - 1][i]) dfs(matrix, landCheck, row - 1, i);
  }

  for (let i = 0; i < row - 1; i += 1) {
    if (matrix[i][0]) dfs(matrix, landCheck, i, 0);

    if (matrix[i][col - 1]) dfs(matrix, landCheck, i, col - 1);
  }

  for (let i = 1; i < row - 1; i += 1) {
    for (let j = 1; j < col - 1; j += 1) {
      if (!landCheck[i][j]) matrix[i][j] = 0;
    }
  }

  return matrix;
}

console.log(removeIslands(matrix));
