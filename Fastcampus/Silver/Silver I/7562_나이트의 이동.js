const solution = (input) => {
  const [T, ...cases] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  let ans = "";

  for (let i = 0; i < cases.length; i += 1) {
    const [N] = cases[i];
    const [curPos, goalPos] = [cases[i + 1], cases[i + 2]];

    const queue = [];

    let min = Infinity;

    const [x, y] = curPos;
    const [goalX, goalY] = goalPos;

    const visited = Array.from({ length: N }, () =>
      Array.from({ length: N }, () => 0)
    );

    queue.push([x, y]);

    const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
    const dy = [1, 2, 2, 1, -1, -2, -2, -1];

    while (queue.length) {
      const [curX, curY] = queue.shift();

      if (curX === goalX && curY === goalY) {
        min = Math.min(visited[curX][curY], min);
      }

      for (let j = 0; j < 8; j += 1) {
        const nX = curX + dx[j];
        const nY = curY + dy[j];

        if (nX >= 0 && nY >= 0 && nX < N && nY < N) {
          if (!visited[nX][nY]) {
            visited[nX][nY] = visited[curX][curY] + 1;
            queue.push([nX, nY]);
          }
        }
      }
    }

    ans += `${min}\n`;

    i += 2;
  }

  console.log(ans);
};

solution(`3
8
0 0
7 0
100
0 0
30 50
10
1 1
1 1`);
