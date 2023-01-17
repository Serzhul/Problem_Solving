/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const mat = [
  [1, 2],
  [3, 4],
];
const r = 1;
const c = 4;

const matrixReshape = (mat, r, c) => {
  const [m, n] = [mat.length, mat[0].length];

  if (m * n !== r * c) return mat;

  const newMatrix = Array.from({ length: r }, () =>
    Array.from({ length: c }, () => 0)
  );

  const elements = [];

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      elements.push(mat[i][j]);
    }
  }
  for (let k = 0; k < r; k += 1) {
    for (let l = 0; l < c; l += 1) {
      newMatrix[k][l] = elements.shift();
    }
  }

  return newMatrix;
};

console.log(matrixReshape(mat, r, c));
