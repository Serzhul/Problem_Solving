// // Solution 1 : 직접 풀이
// const solution = (input) => {
//   const [[N, M], ...cities] = input
//     .toString()
//     .trim()
//     .split("\n")
//     .map((el) => el.split(" ").map(Number));

//   const houses = [];
//   const chickens = [];

//   for (let i = 0; i < N; i += 1) {
//     for (let j = 0; j < N; j += 1) {
//       if (cities[i][j] === 1) {
//         houses.push([i + 1, j + 1]);
//       } else if (cities[i][j] === 2) {
//         chickens.push([i + 1, j + 1]);
//       }
//     }
//   }

//   const graph = Array.from({ length: houses.length }, () => []);

//   houses.forEach((house, idx) => {
//     const [x, y] = house;
//     chickens.forEach((chicken) => {
//       const [a, b] = chicken;
//       const chickenDist = Math.abs(x - a) + Math.abs(y - b);
//       graph[idx].push(chickenDist);
//     });
//   });

//   let min = Infinity;
//   const checked = Array.from({ length: chickens.length }, () => false);

//   const dfs = (start, pick, permutations = []) => {
//     if (permutations.length === pick) {
//       let sum = 0;

//       for (let i = 0; i < graph.length; i += 1) {
//         let minDist = Infinity;
//         for (let j = 0; j < permutations.length; j += 1) {
//           minDist = Math.min(minDist, graph[i][permutations[j]]);
//         }
//         sum += minDist;
//       }

//       min = Math.min(sum, min);
//       return;
//     }

//     for (let i = start; i < chickens.length; i += 1) {
//       if (!checked[i]) {
//         checked[i] = true;
//         permutations.push(i);
//         dfs(i, pick, permutations);
//         permutations.pop();
//         checked[i] = false;
//       }
//     }
//   };

//   for (let i = 1; i <= M; i += 1) {
//     dfs(0, i);
//   }

//   console.log(min);
// };

// Solution2 모범 답안
const solution = (input) => {
  const [[N, M], ...cities] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));
};

solution(`5 2
0 2 0 1 0
1 0 1 0 0
0 0 0 0 0
2 0 0 1 1
2 2 0 1 2`);
