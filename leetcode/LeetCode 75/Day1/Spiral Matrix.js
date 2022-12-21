/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  const row = matrix.length;
  const col = matrix[0].length;

  let [left, right, top, bottom] = [0, col - 1, 0, row - 1];

  const arr = [];

  while (left <= right && top <= bottom) {
    // 왼쪽에서 오른쪽으로 회전
    for (let i = left; i <= right; i += 1) {
      console.log(top, i);
      arr.push(matrix[top][i]);
    }
    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      arr.push(matrix[i][right]);
    }
    right -= 1;

    if (top <= bottom) {
      for (let i = right; i >= left; i -= 1) {
        arr.push(matrix[bottom][i]);
      }
      bottom -= 1;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i -= 1) {
        arr.push(matrix[i][left]);
      }
      left += 1;
    }
  }

  return arr;
};

// const input = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(spiralOrder(input));
