const matrix = [
  [0, -1, -3, 2, 0],
  [1, -2, -5, -1, -3],
  [3, 0, 0, -4, -1],
];

function minimumPassesOfMatrix(matrix) {
  let negatives = 0;
  const queue = [];
  let res = 0;

  const [n, m] = [matrix.length, matrix[0].length];

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      if (matrix[i][j] < 0) negatives += 1;
      else if (matrix[i][j] > 0) queue.push([i, j, 0]);
    }
  }

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  while (queue.length && negatives) {
    const [curRow, curCol, min] = queue.shift();

    if (matrix[curRow][curCol] < 0) {
      matrix[curRow][curCol] *= -1;
      negatives -= 1;
      res = min;
    }

    for (let i = 0; i < 4; i += 1) {
      const newRow = curRow + dx[i];
      const newCol = curCol + dy[i];

      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow >= n ||
        newCol >= m ||
        matrix[newRow][newCol] === 0
      )
        continue;

      if (matrix[newRow][newCol] < 0) {
        queue.push([newRow, newCol, min + 1]);
      }
    }
  }

  return negatives ? -1 : res;
}

console.log(minimumPassesOfMatrix(matrix));
