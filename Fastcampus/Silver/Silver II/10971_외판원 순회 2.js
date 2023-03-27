// const solution = (input) => {
//   const [N, ...cities] = input
//     .toString()
//     .trim()
//     .split("\n")
//     .map((el, idx) => {
//       if (idx === 0) return Number(el);
//       return el.split(" ").map(Number);
//     });

//   const visited = Array.from({ length: 11 }, () => false);

//   let ans = Infinity;

//   const graph = [];

//   for (let i = 0; i <= N; i += 1) graph.push([0]);
//   for (let i = 1; i <= N; i += 1) {
//     for (let j = 0; j < N; j += 1) {
//       graph[i].push(cities[i - 1][j]);
//     }
//   }

//   const res = [];

//   const dfs = (depth) => {
//     if (depth === N - 1) {
//       let totalCost = 0;
//       let cur = 1;

//       for (let i = 0; i < N - 1; i += 1) {
//         const nextNode = res[i];
//         const cost = graph[cur][nextNode];

//         if (cost === 0) return;
//         totalCost += cost;
//         cur = nextNode;
//       }

//       const cost = graph[cur][1];
//       if (cost === 0) return;
//       totalCost += cost;
//       ans = Math.min(ans, totalCost);
//     }

//     for (let i = 2; i <= N; i += 1) {
//       if (!visited[i]) {
//         res.push(i);
//         visited[i] = true;
//         dfs(depth + 1);
//         res.pop();
//         visited[i] = false;
//       }
//     }
//   };

//   dfs(0);

//   console.log(ans);
// };

const solution = (input) => {
  const [N, ...cities] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  const graph = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => 0)
  );

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < N; j += 1) {
      graph[i + 1][j + 1] = cities[i][j];
    }
  }

  let minValue = Infinity;
  const result = [];
  const visited = Array.from({ length: N + 1 }, () => false);

  const dfs = (depth) => {
    if (depth === N - 1) {
      let totalCost = 0;
      let cur = 1;

      for (let i = 0; i < N - 1; i += 1) {
        const nextNode = result[i];
        const cost = graph[cur][nextNode];
        if (cost === 0) return;
        totalCost += cost;
        cur = nextNode;
      }

      const cost = graph[cur][1]; // 1로 돌아오는 비용
      if (cost === 0) return;
      totalCost += cost;
      minValue = Math.min(minValue, totalCost);
    }

    for (let i = 2; i <= N; i += 1) {
      if (!visited[i]) {
        visited[i] = true;
        result.push(i);
        dfs(depth + 1);
        result.pop();
        visited[i] = false;
      }
    }
  };

  dfs(0);

  console.log(minValue);
};

solution(`4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`);
