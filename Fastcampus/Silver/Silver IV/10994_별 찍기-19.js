// const solution = (input) => {
//   const n = Number(input.toString());

//   const map = Array.from({ length: 500 }, () => Array.from({ length: 500 }));

//   for (let i = 0; i < 4 * (n - 1) + 1; i += 1) {
//     for (let j = 0; j < 4 * (n - 1) + 1; j += 1) {
//       map[i][j] = " ";
//     }
//   }

//   function drawStar(num, x, y) {
//     if (num === 1) {
//       map[x][y] = "*";
//       return;
//     }

//     const len = 4 * (num - 1) + 1;

//     for (let j = y; j < y + len; j += 1) {
//       map[x][j] = "*";

//       map[x + len - 1][j] = "*";
//     }

//     for (let i = x; i < x + len; i += 1) {
//       map[i][y] = "*";
//       map[i][y + len - 1] = "*";
//     }

//     drawStar(num - 1, x + 2, y + 2);
//   }

//   drawStar(n, 0, 0);

//   let ans = "";

//   for (let i = 0; i < 4 * (n - 1) + 1; i += 1) {
//     for (let j = 0; j < 4 * (n - 1) + 1; j += 1) {
//       ans += map[i][j];
//     }
//     ans += "\n";
//   }

//   console.log(ans);
// };

// 다른 풀이
const solution = (input) => {
  const n = Number(input.toString());

  const result = [];

  for (let i = 0; i < n; i += 1) {
    result.push("* ".repeat(i) + "*".repeat(4 * (n - i) - 3) + " *".repeat(i));

    if (i !== n - 1)
      result.push(
        "* ".repeat(i + 1) + " ".repeat(4 * (n - i) - 7) + " *".repeat(i + 1)
      );
  }

  console.log(result.join("\n"));
  console.log(result.reverse().slice(1).join("\n"));
};

solution(`3`);
