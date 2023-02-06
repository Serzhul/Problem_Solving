// const matrix = [
//   [1, 4, 7, 12, 15, 1000],
//   [2, 5, 19, 31, 32, 1001],
//   [3, 8, 24, 33, 35, 1002],
//   [40, 41, 42, 44, 45, 1003],
//   [99, 100, 103, 106, 128, 1004],
// ];

// const target = 44;

const matrix = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004],
];

const target = 4;

// Solution1 : Brute Force
// function searchInSortedMatrix(matrix, target) {
//   const [n, m] = [matrix.length, matrix[0].length];

//   for (let i = 0; i < n; i += 1) {
//     for (let j = 0; j < m; j += 1) {
//       if (matrix[i][j] === target) return [i, j];
//     }
//   }

//   return [-1, -1];
// }

// Solution2 :

function searchInSortedMatrix(matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col -= 1;
    } else if (matrix[row][col] < target) {
      row += 1;
    } else {
      return [row, col];
    }
  }

  return [-1, -1];
}

console.log(searchInSortedMatrix(matrix, target));
