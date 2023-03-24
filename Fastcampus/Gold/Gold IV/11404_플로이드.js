const solution = (input) => {
  const [n, m, ...buses] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx <= 1) {
        return Number(el);
      }
      return el.split(" ").map(Number);
    });

  const graph = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => Infinity)
  );

  buses.forEach((bus) => {
    const [from, to, cost] = bus;

    graph[from][to] = Math.min(graph[from][to], cost);
  });

  for (let k = 1; k <= n; k += 1) {
    for (let a = 1; a <= n; a += 1) {
      for (let b = 1; b <= n; b += 1) {
        if (a !== b) {
          const cost = graph[a][k] + graph[k][b];
          graph[a][b] = Math.min(graph[a][b], cost);
        }
      }
    }
  }

  let ans = "";

  for (let i = 1; i <= n; i += 1) {
    let line = "";
    for (let j = 1; j <= n; j += 1) {
      if (graph[i][j] === Infinity) line += `0 `;
      else line += `${graph[i][j]} `;
    }
    ans += `${line}\n`;
  }

  console.log(ans);
};

solution(`5
14
1 2 2
1 3 3
1 4 1
1 5 10
2 4 2
3 4 1
3 5 1
4 5 3
3 5 10
3 1 8
1 4 2
5 1 7
3 4 2
5 2 4`);
