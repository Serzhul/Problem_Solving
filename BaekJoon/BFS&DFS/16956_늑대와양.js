const solution = (input) => {
  let [[R, C], ...pasture] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, i) =>
      i === 0 ? el.split(" ").map((num) => Number(num)) : el.split("")
    );

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let ck = false;

  for (let i = 0; i < R; i += 1) {
    for (let j = 0; j < C; j += 1) {
      const cur = pasture[i][j];

      if (cur === "W") {
        for (let k = 0; k < 4; k += 1) {
          const nX = i + dx[k];
          const nY = j + dy[k];

          if (nX < 0 || nY < 0 || nX >= R || nY >= C) continue;

          if (pasture[nX][nY] === "S") {
            ck = true;
          }
        }
      }
    }
  }

  let answer = "";

  if (ck === true) answer += "0";
  else {
    answer += `1\n`;
    for (let i = 0; i < R; i += 1) {
      for (let j = 0; j < C; j += 1) {
        if (!"SW".includes(pasture[i][j])) {
          pasture[i][j] = "D";
        }
      }
    }

    pasture.forEach((status) => {
      answer += `${status.join("")}\n`;
    });
  }

  console.log(answer);
};

solution(`5 5
.S...
...S.
S....
...S.
.S...`);
