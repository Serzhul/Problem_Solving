const maxAreaOfIsland = (grid) => {
  let island = 0;

  const n = grid.length;
  const m = grid[0].length;

  const findIslands = (low, col) => {
    if (low < 0 || low >= n || col < 0 || col >= m || !grid[low][col]) return 0;

    grid[low][col] = 0;

    return (
      1 +
      findIslands(low + 1, col) +
      findIslands(low - 1, col) +
      findIslands(low, col + 1) +
      findIslands(low, col - 1)
    );
  };

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      if (grid[i][j]) island = Math.max(island, findIslands(i, j));
    }
  }

  return island;
};

maxAreaOfIsland([
  [1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1],
]);
