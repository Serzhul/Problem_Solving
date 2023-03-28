const solution = (input) => {
  const [n, ...mines] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split("");
    });

  const board = [];

  const ans = [];

  for (let i = 0; i < n; i += 1) {
    board.push(mines[i]);
    ans.push(mines[i + n]);
  }

  const dx = [1, 0, -1, 0, -1, -1, 1, 1];
  const dy = [0, 1, 0, -1, -1, 1, -1, 1];

  let mineIsOpen = false;

  const markMine = (x, y) => {
    let count = 0;

    for (let i = 0; i < 8; i += 1) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;

      if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === "*") {
        count += 1;
      }
    }

    ans[x][y] = count;
  };

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (ans[i][j] === "x") {
        if (board[i][j] === "*") {
          mineIsOpen = true;
        }
        markMine(i, j);
      }
    }
  }

  if (mineIsOpen) {
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (board[i][j] === "*") {
          ans[i][j] = "*";
        }
      }
    }
  }

  console.log(ans.map((el) => el.join("")).join("\n"));
};

solution(`8
...**..*
......*.
....*...
........
........
.....*..
...**.*.
.....*..
xxx.....
xxxx....
xxxx....
xxxxx...
xxxxx...
xxxxx...
xxx.....
xxxxx...`);
