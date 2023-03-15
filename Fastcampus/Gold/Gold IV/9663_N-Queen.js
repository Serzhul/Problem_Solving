const solution = (input) => {
  const [N] = input.toString().trim().split("\n").map(Number);

  // 특정 위치에 Queen을 놓을 수 있는지 없는지 체크
  let ans = 0;
  const queens = [];

  function isPossible(x, y) {
    for (let i = 0; i < queens.length; i += 1) {
      const [a, b] = queens[i];
      // 1. 상하좌우
      if (a === x || b === y) return false;
      // 2. 대각선
      if (Math.abs(a - x) === Math.abs(b - y)) return false;
    }
    return true;
  }

  function dfs(row) {
    if (row === N) ans += 1;

    for (let i = 0; i < N; i += 1) {
      if (isPossible(row, i)) {
        queens.push([row, i]);
        dfs(row + 1);
        queens.pop();
      }
    }
  }

  dfs(0);

  console.log(ans);
};

solution(`8`);
