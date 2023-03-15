const solution = (input) => {
  const [...testCases] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  let caseNumber = 0;

  for (let i = 0; i < testCases.length; i += 1) {
    caseNumber += 1;
    const [n, m] = testCases[i];

    if (n === 0 && m === 0) break;

    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = Array.from({ length: n + 1 }, () => false);

    let trees = 0;

    for (let j = i + 1; j < i + m + 1; j += 1) {
      const [from, to] = testCases[j];
      graph[from].push(to);
      graph[to].push(from);
    }

    function isCycle(x, prev) {
      visited[x] = true;

      for (let i = 0; i < graph[x].length; i += 1) {
        const y = graph[x][i];
        if (!visited[y]) {
          if (isCycle(y, x)) return true;
        } else if (y !== prev) return true;
      }

      return false;
    }

    for (let nodeNum = 1; nodeNum <= n; nodeNum += 1) {
      if (!visited[nodeNum]) {
        if (!isCycle(nodeNum, 0)) trees += 1;
      }
    }

    if (trees === 0) console.log(`Case ${caseNumber}: No trees.`);
    else if (trees === 1) console.log(`Case ${caseNumber}: There is one tree.`);
    else console.log(`Case ${caseNumber}: A forest of ${trees} trees.`);
    i += m;
  }
};

solution(`6 3
1 2
2 3
3 4
6 5
1 2
2 3
3 4
4 5
5 6
6 6
1 2
2 3
1 3
4 5
5 6
6 4
0 0`);
