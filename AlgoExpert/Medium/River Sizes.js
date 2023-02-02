const matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

function riverSizes(matrix) {
  const [n, m] = [matrix.length, matrix[0].length];

  const rivers = [];

  const traverse = (row, col, size) => {
    let total = 0;

    if (row < 0 || col < 0 || row >= n || col >= m || matrix[row][col] !== 1) {
      return total;
    }

    matrix[row][col] = 2;
    total += 1;

    total += traverse(row + 1, col, size + 1);
    total += traverse(row, col + 1, size + 1);
    total += traverse(row - 1, col, size + 1);
    total += traverse(row, col - 1, size + 1);

    return total;
  };

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      if (matrix[i][j] === 1) {
        rivers.push(traverse(i, j, 0));
      }
    }
  }

  return rivers;
}

console.log(riverSizes(matrix));
