/**
 * @param {number[][]} grid
 * @return {number[]}
 */

// const input = [
//   [1, 1, 1, -1, -1],
//   [1, 1, 1, -1, -1],
//   [-1, -1, -1, 1, 1],
//   [1, 1, 1, 1, -1],
//   [-1, -1, -1, -1, -1],
// ];

// const input = [[-1]];

// const input = [[1]];

const input = [
  [1, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1],
  [1, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1],
];

// Sol1
// const findBall = function (grid) {
//   const row = grid.length;
//   const col = grid[0].length;

//   const res = [];

//   for (let i = 0; i < col; i += 1) {
//     let curRow = 0;
//     let curCol = i;

//     let reached = true;

//     while (curRow < row) {
//       if (grid[curRow][curCol] === 1) {
//         if (grid[curRow][curCol + 1] === -1) {
//           res.push(-1);
//           reached = false;
//           break;
//         } else {
//           curCol += 1;
//           curRow += 1;
//         }
//         continue;
//       }

//       if (grid[curRow][curCol] === -1) {
//         if (grid[curRow][curCol - 1] === 1) {
//           res.push(-1);
//           reached = false;
//           break;
//         } else {
//           curCol -= 1;
//           curRow += 1;
//         }
//         continue;
//       }

//       if (curCol >= col || curCol < 0) {
//         res.push(-1);
//         reached = false;
//         break;
//       }
//     }

//     if (reached) {
//       if (curCol >= col || curCol < 0) {
//         res.push(-1);
//       } else {
//         res.push(curCol);
//       }
//     }
//   }

//   return res;
// };

// Sol2

const findBall = function (grid) {
  const row = grid.length;
  const col = grid[0].length;

  const res = [];

  for (let i = 0; i < col; i += 1) {
    let curRow = 0;
    let curCol = i;
    let reached = true;

    while (curRow < row) {
      if (grid[curRow][curCol] === 1) {
        if (grid[curRow][curCol + 1] === -1) {
          res.push(-1);
          reached = false;
          break;
        } else {
          curCol += 1;
          curRow += 1;
        }
        continue;
      }

      if (grid[curRow][curCol] === -1) {
        if (grid[curRow][curCol - 1] === 1) {
          res.push(-1);
          reached = false;
          break;
        } else {
          curCol -= 1;
          curRow += 1;
        }
        continue;
      }

      if (curCol >= col || curCol < 0) {
        res.push(-1);
        reached = false;
        break;
      }
    }

    if (reached) {
      if (curCol >= col || curCol < 0) {
        res.push(-1);
      } else {
        res.push(curCol);
      }
    }
  }

  return res;
};

console.log(findBall(input));
