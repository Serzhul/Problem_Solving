// Solution1 : 스택 사이즈 초과
// const solution = (input) => {
//   const [T, ...testCases] = input
//     .toString()
//     .trim()
//     .split("\n")
//     .map((el, idx) => {
//       if (idx === 0) return Number(el);
//       return el.split(" ").map(Number);
//     });

//   let ans = ``;

//   for (let i = 0; i < testCases.length; i += 1) {
//     const n = testCases[i][0];
//     const students = testCases[i + 1];
//     const graph = Array.from({ length: n + 1 }, () => []);
//     const visited = Array.from({ length: n + 1 }, () => false);
//     let outsiders = 0;

//     students.forEach((student, idx) => {
//       graph[idx + 1].push(student);
//     });

//     const isCycle = (from, count) => {
//       const to = graph[from][0];

//       if (count === 1 && to === from) return true;
//       if (count >= 2 && to === from) return false;

//       if (!visited[to]) {
//         visited[to] = true;
//         if (isCycle(to, count + 1)) {
//           visited[to] = false;
//           return true;
//         }
//         visited[to] = false;
//         return false;
//       }

//       return true;
//     };

//     for (let sNum = 1; sNum <= n; sNum += 1) {
//       visited[sNum] = true;
//       if (!isCycle(sNum, 1)) {
//         outsiders += 1;
//       }
//       visited[sNum] = false;
//     }

//     ans += `${outsiders}\n`;

//     i += 1;
//   }

//   console.log(ans);
// };

const solution = (input) => {
  const data = input.toString().trim().split("\n");

  let testCases = Number(data[0]);
  let line = 1;

  while (testCases--) {
    let n = Number(data[line]);
    let graph = [0, ...data[line + 1].split(" ").map(Number)];
    const visited = new Array(n + 1).fill(false);
    const finished = new Array(n + 1).fill(false);
    const result = [];

    const dfs = (x, graph, visited, finished, result) => {
      visited[x] = true;
      let y = graph[x];
      if (!visited[y]) {
        dfs(y, graph, visited, finished, result);
      } else if (!finished[y]) {
        while (y !== x) {
          result.push(y);
          y = graph[y];
        }
        result.push(x);
      }
      finished[x] = true;
    };

    for (let x = 1; x <= n; x += 1) {
      if (!visited[x]) dfs(x, graph, visited, finished, result);
    }
    line += 2;
    console.log(n - result.length);
  }
};

solution(`2
7
3 1 3 7 3 4 6
8
1 2 3 4 5 6 7 8`);
