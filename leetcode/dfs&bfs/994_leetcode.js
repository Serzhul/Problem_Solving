const orangesRotting = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const queue = [];

  let freshOranges = 0;

  let times = 0;

  const isValid = (xx, yy) => {
    if (xx < 0 || yy < 0 || xx >= m || yy >= n || grid[xx][yy] !== 1)
      return false;
    return true;
  };

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (grid[i][j] === 2) queue.push([i, j]);
      else if (grid[i][j] === 1) freshOranges += 1;
    }
  }

  if (freshOranges === 0) return 0;

  while (queue.length) {
    const size = queue.length;

    times += 1;

    for (let i = 0; i < size; i += 1) {
      const [xx, yy] = queue.shift();

      directions.forEach(([x, y]) => {
        const row = xx + x;
        const col = yy + y;

        if (isValid(row, col)) {
          grid[row][col] = 2;
          queue.push([row, col]);
          freshOranges -= 1;
        }
      });
    }
  }

  return freshOranges === 0 ? times - 1 : -1;
};

console.log(orangesRotting([[2, 1, 0, 2]]));
