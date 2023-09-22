const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

// function productSum(array, depth = 1) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i += 1) {
//     const cur = array[i];

//     if (typeof cur === "number") {
//       sum += cur;
//     } else {
//       sum += productSum(cur, depth + 1);
//     }
//   }

//   return sum * depth;
// }

// function productSum(array, depth = 1) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i += 1) {
//     const cur = array[i];

//     if (typeof cur === "number") {
//       sum += cur;
//     } else {
//       sum += productSum(cur, depth + 1);
//     }
//   }

//   return sum * depth;
// }

// 복습 (2023/9)

function productSum(curArr, depth = 1) {
  let sum = 0;

  for (let i = 0; i < curArr.length; i += 1) {
    if (typeof curArr[i] === "number") sum += curArr[i];
    else sum += productSum(curArr[i], depth + 1);
  }

  sum *= depth;

  return sum;
}

console.log(productSum(array));
