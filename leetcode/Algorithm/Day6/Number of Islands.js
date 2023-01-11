/**
 * @param {character[][]} grid
 * @return {number}
 */

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

const [m, n] = [grid.length, grid[0].length];

const dfs = (row, col) => {
  if (row >= 0 && row >= 0 && row < m && col < n && grid[row][col] === "1") {
    grid[row][col] = "2";
    dfs(row + 1, col);
    dfs(row, col + 1);
    dfs(row - 1, col);
    dfs(row, col - 1);
  }
};

const numIslands = (grid) => {
  let res = 0;

  for (let row = 0; row < m; row += 1) {
    for (let col = 0; col < n; col += 1) {
      if (grid[row][col] === "1") {
        res += 1;
        dfs(row, col);
      }
    }
  }

  return res;
};

console.log(numIslands(grid));
