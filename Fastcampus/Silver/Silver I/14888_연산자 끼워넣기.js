// Solution1 : 직접 풀이
// const solution = (input) => {
//   const [N, nums, signs] = input
//     .toString()
//     .trim()
//     .split("\n")
//     .map((el, idx) => {
//       if (idx === 0) return Number(el);
//       return el.split(" ").map(Number);
//     });

//   const signsPossibilities = [];

//   for (let i = 0; i < signs.length; i += 1) {
//     for (let j = 1; j <= signs[i]; j += 1) {
//       signsPossibilities.push(i);
//     }
//   }

//   const visited = Array.from(
//     { length: signsPossibilities.length },
//     () => false
//   );

//   const calculation = (numArr, signArr) => {
//     let res = numArr[0];

//     for (let i = 1; i < numArr.length; i += 1) {
//       const curNum = numArr[i];
//       const curSign = signArr[i - 1];

//       if (curSign === 0) {
//         res += curNum;
//       } else if (curSign === 1) {
//         res -= curNum;
//       } else if (curSign === 2) {
//         res *= curNum;
//       } else if (curSign === 3) {
//         if (res < 0) {
//           res *= -1;
//           res = Math.floor(res / curNum);
//           res *= -1;
//         } else res = Math.floor(res / curNum);
//       }
//     }

//     return res;
//   };

//   let max = -Infinity;
//   let min = Infinity;

//   const dfs = (selected) => {
//     if (selected.length === signsPossibilities.length) {
//       const res = calculation(nums, selected);
//       max = Math.max(max, res);
//       min = Math.min(min, res);
//     }

//     for (let i = 0; i < signsPossibilities.length; i += 1) {
//       if (!visited[i]) {
//         visited[i] = true;
//         selected.push(signsPossibilities[i]);
//         dfs(selected);
//         selected.pop();
//         visited[i] = false;
//       }
//     }
//   };

//   dfs([]);

//   console.log(`${max}\n${min}`);
// };

const solution = (input) => {
  const [N, arr, signs] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  let [add, sub, mul, div] = signs;

  let maxValue = -1e9;
  let minValue = 1e9;

  const dfs = (index, value) => {
    if (index === N) {
      minValue = Math.min(minValue, value);
      maxValue = Math.max(maxValue, value);
      return;
    }

    if (add > 0) {
      add -= 1;
      dfs(index + 1, value + arr[index]);
      add += 1;
    }

    if (sub > 0) {
      sub -= 1;
      dfs(index + 1, value - arr[index]);
      sub += 1;
    }

    if (mul > 0) {
      mul -= 1;
      dfs(index + 1, value * arr[index]);
      mul += 1;
    }

    if (div > 0) {
      div -= 1;
      dfs(index + 1, ~~(value / arr[index]));
      div += 1;
    }
  };

  dfs(1, arr[0]);

  console.log(`${maxValue}\n${minValue}`);
};

// Solution 2 : 다른 풀이

solution(`6
1 2 3 4 5 6
2 1 1 1`);
