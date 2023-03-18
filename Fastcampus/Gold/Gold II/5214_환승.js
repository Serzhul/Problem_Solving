const solution = (input) => {
  const [[N, K, M], ...hyperTubes] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  const graph = Array.from({ length: N + M + 1 }, () => []);

  for (let i = 0; i < M; i += 1) {
    const arr = hyperTubes[i];
    for (let j = 0; j < arr.length; j += 1) {
      const x = arr[j];
      graph[x].push(N + i + 1);
      graph[N + i + 1].push(x);
    }
  }

  const visited = new Set([1]);
  const queue = [];
  queue.push([1, 1]);

  let found = false;

  while (queue.length) {
    const [dist, now] = queue.shift();

    if (now === N) {
      console.log(parseInt(dist / 2, 10) + 1);
      found = true;
      break;
    }

    for (let i = 0; i < graph[now].length; i += 1) {
      const y = graph[now][i];
      if (!visited.has(y)) {
        queue.push([dist + 1, y]);
        visited.add(y);
      }
    }
  }

  if (!found) console.log(-1);
};

solution(`15 8 4
11 12 8 14 13 6 10 7
1 5 8 12 13 6 2 4
10 15 4 5 9 8 14 12
11 12 14 3 5 6 1 13`);
