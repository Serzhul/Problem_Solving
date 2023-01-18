/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;

const searchMatrix = (matrix, target) => {
  const binarySearch = (arr, goal) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === goal) return true;

      if (arr[mid] < goal) {
        left += 1;
      } else {
        right -= 1;
      }
    }

    return false;
  };

  const [m, n] = [matrix.length, matrix[0].length];

  for (let i = 0; i < m; i += 1) {
    if (matrix[i][0] <= target && target <= matrix[i][n - 1]) {
      return binarySearch(matrix[i], target);
    }
  }

  return false;
};

console.log(searchMatrix(matrix, target));
