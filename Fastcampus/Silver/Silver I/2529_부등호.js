// Solution1 : 직접 풀이

// const solution = (input) => {
//   const [k, symbols] = input
//     .toString()
//     .trim()
//     .split("\n")
//     .map((el, idx) => {
//       if (idx === 0) {
//         return Number(el);
//       }
//       return el.split(" ");
//     });

//   const visited = [];

//   const used = Array.from({ length: 10 }, () => false);

//   let ans = "";
//   let max = 0;
//   let min = Infinity;

//   const dfs = (depth) => {
//     if (depth === k + 1) {
//       for (let i = 0; i < symbols.length; i += 1) {
//         const cur = symbols[i];
//         if (cur === "<" && visited[i] > visited[i + 1]) return;
//         if (cur === ">" && visited[i] < visited[i + 1]) return;
//       }
//       const target = Number(visited.join(""));
//       min = Math.min(min, target);
//       max = Math.max(max, target);
//       return;
//     }

//     for (let i = 0; i <= 9; i += 1) {
//       if (!used[i]) {
//         used[i] = true;
//         visited.push(i);
//         dfs(depth + 1);
//         used[i] = false;
//         visited.pop();
//       }
//     }
//   };

//   dfs(0);

//   if (String(max).length < k + 1) {
//     let maxStr = String(max);
//     for (let i = 0; i < k + 1 - maxStr.length; i += 1) {
//       maxStr = `0${maxStr}`;
//     }
//     ans += `${maxStr}\n`;
//   } else {
//     ans += `${max}\n`;
//   }

//   if (String(min).length < k + 1) {
//     let minStr = String(min);
//     for (let i = 0; i < k + 1 - minStr.length; i += 1) {
//       minStr = `0${minStr}`;
//     }
//     ans += `${minStr}`;
//   } else {
//     ans += `${min}`;
//   }

//   console.log(ans);
// };

// Solution2 : 모범 답안

const solution = (input) => {
  const [k, symbols] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) {
        return Number(el);
      }
      return el.split(" ");
    });

  const visited = [];

  const used = Array.from({ length: 10 }, () => false);

  let ans = "";
  let first = "";
  let current = "";

  // 첫번째가 가장 작은 수 , 마지막이 가장 큰 수

  const dfs = (depth) => {
    if (depth === k + 1) {
      for (let i = 0; i < symbols.length; i += 1) {
        const cur = symbols[i];
        if (cur === "<" && visited[i] > visited[i + 1]) return;
        if (cur === ">" && visited[i] < visited[i + 1]) return;
      }
      const target = Number(visited.join(""));
      current = target;
      if (first === "") first = target;
      return;
    }

    for (let i = 0; i <= 9; i += 1) {
      if (!used[i]) {
        used[i] = true;
        visited.push(i);
        dfs(depth + 1);
        used[i] = false;
        visited.pop();
      }
    }
  };

  dfs(0);

  ans += `${current}\n${first}`;

  console.log(ans);
};

solution(`9
> < < < > > > < <`);
