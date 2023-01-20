/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];

const pacificAtlantic = (heights) => {
  if (!heights.length) return [];

  const [m, n] = [heights.length, heights[0].length];

  const pacific = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => false)
  );

  const atlantic = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => false)
  );

  const dfs = (r, c, current, ocean) => {
    if (r < 0 || c < 0 || r >= m || c >= n) return;

    if (heights[r][c] < current) return;

    if (ocean[r][c]) return;

    ocean[r][c] = true;

    dfs(r + 1, c, heights[r][c], ocean);
    dfs(r - 1, c, heights[r][c], ocean);
    dfs(r, c + 1, heights[r][c], ocean);
    dfs(r, c - 1, heights[r][c], ocean);
  };

  for (let col = 0; col < n; col += 1) {
    dfs(0, col, Number.MIN_SAFE_INTEGER, pacific);
    dfs(m - 1, col, Number.MIN_SAFE_INTEGER, atlantic);
  }

  for (let row = 0; row < m; row += 1) {
    dfs(row, 0, Number.MIN_SAFE_INTEGER, pacific);
    dfs(row, n - 1, Number.MIN_SAFE_INTEGER, atlantic);
  }

  const result = [];

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (atlantic[i][j] && pacific[i][j]) result.push([i, j]);
    }
  }

  return result;
};

console.log(pacificAtlantic(heights));
