// low, high 두 양수가 주어졌을 때, 두 숫자 사이의 홀수 개수를 반환

// Solution 1
// const countOdds = (low, high) => {
//   let oddCount = 0;

//   for (let i = low; i <= high; i += 1) {
//     if (i % 2 === 1) oddCount += 1;
//   }

//   return oddCount;
// };

// Solution 2

const countOdds = (low, high) => {
  const count = Math.round((high - low) / 2);

  return low % 2 === 1 && high % 2 === 1 ? count + 1 : count;
};

countOdds(3, 7);
