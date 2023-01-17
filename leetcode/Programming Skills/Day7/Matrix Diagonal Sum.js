/**
 * @param {number[][]} mat
 * @return {number}
 */
// const mat = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

const mat = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

const diagonalSum = (mat) => {
  const n = mat.length;

  let primarySum = 0;
  let secondarySum = 0;

  for (let i = 0; i < n; i += 1) {
    primarySum += mat[i][i];
    mat[i][i] = 0;
  }

  for (let i = n - 1; i >= 0; i -= 1) {
    secondarySum += mat[n - i - 1][i];
  }

  return primarySum + secondarySum;
};

console.log(diagonalSum(mat));
