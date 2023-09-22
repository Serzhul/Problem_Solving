const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17];

// function smallestDifference(arrayOne, arrayTwo) {
//   arrayOne.sort((a, b) => a - b);
//   arrayTwo.sort((a, b) => a - b);

//   let pointOne = 0;
//   let pointTwo = 0;

//   let minDiff = Number.MAX_SAFE_INTEGER;
//   let res = [];

//   while (pointOne < arrayOne.length && pointTwo < arrayTwo.length) {
//     let diff;
//     const firstNum = arrayOne[pointOne];
//     const secondNum = arrayTwo[pointTwo];
//     if (firstNum < secondNum) {
//       diff = secondNum - firstNum;
//       pointOne += 1;
//     } else {
//       diff = firstNum - secondNum;
//       pointTwo += 1;
//     }
//     if (minDiff > diff) {
//       minDiff = diff;
//       res = [firstNum, secondNum];
//     }
//   }

//   return res;
// }

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let ans1;
  let ans2;
  let minDiff = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arrayOne.length; i += 1) {
    const target = arrayOne[i];

    let start = 0;
    let end = arrayTwo.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (arrayTwo[mid] === target) {
        ans1 = target;
        ans2 = target;
        break;
      }

      const diff = Math.abs(arrayTwo[mid] - target);

      if (diff < minDiff) {
        ans1 = target;
        ans2 = arrayTwo[mid];
        minDiff = diff;
      }

      if (arrayTwo[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return [ans1, ans2];
}

console.log(smallestDifference(arrayOne, arrayTwo));
