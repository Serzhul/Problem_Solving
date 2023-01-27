const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17];

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let pointOne = 0;
  let pointTwo = 0;

  let minDiff = Number.MAX_SAFE_INTEGER;
  let res = [];

  while (pointOne < arrayOne.length && pointTwo < arrayTwo.length) {
    let diff;
    const firstNum = arrayOne[pointOne];
    const secondNum = arrayTwo[pointTwo];
    if (firstNum < secondNum) {
      diff = secondNum - firstNum;
      pointOne += 1;
    } else {
      diff = firstNum - secondNum;
      pointTwo += 1;
    }
    if (minDiff > diff) {
      minDiff = diff;
      res = [firstNum, secondNum];
    }
  }

  return res;
}

console.log(smallestDifference(arrayOne, arrayTwo));
