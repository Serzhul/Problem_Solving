const solution = (input) => {
  const [[R, C], ...maps] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return el.split(" ").map(Number);
      return el.split("");
    });

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const oceanArr = [];

  function markOcean(x, y) {
    let count = 0;

    for (let i = 0; i < 4; i += 1) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < R && ny < C) {
        if (maps[nx][ny] === ".") count += 1;
      } else {
        count += 1;
      }
    }

    if (count >= 3) {
      oceanArr.push([x, y]);
    }
  }

  for (let i = 0; i < R; i += 1) {
    for (let j = 0; j < C; j += 1) {
      if (maps[i][j] === "X") {
        markOcean(i, j);
      }
    }
  }

  for (let i = 0; i < oceanArr.length; i += 1) {
    const [x, y] = oceanArr[i];
    maps[x][y] = ".";
  }

  let left, right, top, bottom;

  for (let i = 0; i < R; i += 1) {
    for (let j = 0; j < C; j += 1) {
      if (maps[i][j] === "X") {
        if (left === undefined) {
          left = j;
          right = j;
          top = i;
          bottom = i;
        } else {
          left = Math.min(left, j);
          right = Math.max(right, j);
          top = Math.min(top, i);
          bottom = Math.max(bottom, i);
        }
      }
    }
  }
  let ans = "";
  for (let i = top; i <= bottom; i += 1) {
    let row = "";
    for (let j = left; j <= right; j += 1) {
      row += maps[i][j];
    }
    ans += `${row}\n`;
  }

  console.log(ans);
};

solution(`5 3
...
.X.
.X.
.X.
...`);
