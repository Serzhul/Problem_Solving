/**
 * @param {number[][]} grid
 * @return {number}
 */

// const grid = [
//   [0, 1],
//   [1, 1],
// ];

// const grid = [
//   [0, 0, 0],
//   [1, 1, 0],
//   [1, 1, 0],
// ];

const grid = [
  [0, 0, 0],
  [1, 0, 0],
  [1, 1, 0],
];

const shortestPathBinaryMatrix = (grid) => {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  if (grid[0][0] === 1) return -1;

  const n = grid.length;
  const queue = [[0, 0, 1]]; // 시작점

  while (queue.length) {
    const [row, col, path] = queue.shift();

    if (row === n - 1 && col === n - 1) return path;

    for (let i = 0; i < directions.length; i += 1) {
      const [dx, dy] = directions[i];

      const x = row + dx;
      const y = col + dy;

      if (x >= 0 && y >= 0 && x < n && y < n && grid[x][y] === 0) {
        queue.push([x, y, path + 1]);
        grid[x][y] = 1;
      }
    }
  }

  return -1;
};

console.log(shortestPathBinaryMatrix(grid));
