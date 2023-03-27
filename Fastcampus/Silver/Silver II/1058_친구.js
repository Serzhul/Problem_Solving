// const solution = (input) => {
//   const [N, ...friends] = input
//     .toString()
//     .trim()
//     .split("\n")
//     .map((el, idx) => {
//       if (idx === 0) {
//         return Number(el);
//       }
//       return el.split("");
//     });

//   const graph = Array.from({ length: N + 1 }, () =>
//     Array.from({ length: N + 1 }, () => Infinity)
//   );

//   friends.forEach((friend, idx) => {
//     for (let i = 0; i < friend.length; i += 1) {
//       const cur = friend[i];

//       if (cur === "Y") {
//         const [from, to] = [idx + 1, i + 1];
//         graph[from][to] = 1;
//       }
//     }
//   });

//   for (let k = 1; k <= N; k += 1) {
//     for (let a = 1; a <= N; a += 1) {
//       for (let b = 1; b <= N; b += 1) {
//         const cost = graph[a][k] + graph[k][b];
//         if (graph[a][b] > cost) graph[a][b] = cost;
//       }
//     }
//   }

//   const twoFriends = new Array(N + 1).fill(0);
//   for (let a = 1; a <= N; a += 1) {
//     for (let b = 1; b <= N; b += 1) {
//       if (a !== b && graph[a][b] <= 2) twoFriends[a] += 1;
//     }
//   }

//   console.log(twoFriends);

//   console.log(twoFriends.reduce((a, b) => Math.max(a, b)));
// };

// 복습
const solution = (input) => {
  const [N, ...friends] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) {
        return Number(el);
      }
      return el.split("");
    });

  const graph = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => Infinity)
  );

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < N; j += 1) {
      if (friends[i][j] === "Y") {
        graph[i + 1][j + 1] = 1;
      }
    }
  }

  for (let k = 1; k <= N; k += 1) {
    for (let a = 1; a <= N; a += 1) {
      for (let b = 1; b <= N; b += 1) {
        const cost = graph[a][k] + graph[k][b];
        graph[a][b] = Math.min(graph[a][b], cost);
      }
    }
  }

  const twoFriends = new Array(N + 1).fill(0);

  for (let a = 1; a <= N; a += 1) {
    for (let b = 1; b <= N; b += 1) {
      if (a !== b && graph[a][b] <= 2) twoFriends[a] += 1;
    }
  }

  console.log(Math.max(...twoFriends));
};

solution(`5
NYNNN
YNYNN
NYNYN
NNYNY
NNNYN`);
