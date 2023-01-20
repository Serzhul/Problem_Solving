/**
 * @param {number[][]} grid
 * @return {number}
 */

// const grid = [
//   [2, 1, 1],
//   [1, 1, 0],
//   [0, 1, 1],
// ];

// const grid = [
//   [2, 1, 1],
//   [0, 1, 1],
//   [1, 0, 1],
// ];

const grid = [[2], [1]];

const orangesRotting = (grid) => {
  let oranges = 0;
  const queue = [];
  let res = 0;

  const [m, n] = [grid.length, grid[0].length];

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (grid[i][j] === 1) oranges += 1;
      else if (grid[i][j] === 2) queue.push([i, j, 0]);
    }
  }

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  while (queue.length && oranges) {
    const [curRow, curCol, min] = queue.shift();

    if (grid[curRow][curCol] === 1) {
      grid[curRow][curCol] = 2;
      oranges -= 1;
      res = min;
    }

    for (let i = 0; i < 4; i += 1) {
      const newRow = curRow + dx[i];
      const newCol = curCol + dy[i];

      if (newRow < 0 || newCol < 0 || newRow > m - 1 || newCol > n - 1)
        continue;

      if (grid[newRow][newCol] === 1) {
        queue.push([newRow, newCol, min + 1]);
      }
    }
  }

  return oranges ? -1 : res;
};

console.log(orangesRotting(grid));
