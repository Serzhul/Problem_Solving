const array = [12, 3, 1, 2, -6, 5, -8, 6];
const targetSum = 0;

// function threeNumberSum(array, targetSum) {
//   array.sort((a, b) => a - b);

//   const res = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const cur = array[i];
//     let left = i + 1;
//     let right = array.length - 1;
//     while (left < right) {
//       const target = targetSum - cur;
//       const sum = array[left] + array[right];

//       if (sum === target) {
//         res.push([cur, array[left], array[right]]);
//       }

//       if (sum < target) {
//         left += 1;
//       } else {
//         right -= 1;
//       }
//     }
//   }

//   return res;
// }

function threeNumberSum(array, targetSum) {
  const answer = [];
  array.sort((a, b) => a - b); // [ -8, -6, 1, 2, 3, 5, 6, 12]

  // 1개의 값을 고정하고 나머지 2개의 값의 합을 탐색하면서 일치하는 값이 있는지 확인
  for (let i = 0; i < array.length; i += 1) {
    const curVal = array[i];

    let start = i + 1;
    let end = array.length - 1;

    while (start < end) {
      const calVal = array[start] + array[end];

      if (curVal + calVal === targetSum) {
        answer.push([array[i], array[start], array[end]]);
      }

      if (curVal + calVal < targetSum) {
        start += 1;
      } else end -= 1;
    }
  }

  return answer;
}

console.log(threeNumberSum(array, targetSum));
