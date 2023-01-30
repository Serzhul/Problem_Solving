const array = [75, 105, 120, 75, 90, 135];

// Solution1 : DP 배열 활용
// function maxSubsetSumNoAdjacent(array) {
//   if (array.length === 0) return 0;
//   if (array.length === 1) return array[0];
//   if (array.length === 2) return Math.max(array[0], array[1]);

//   let maxSum = 0;

//   const dp = Array.from({ length: array.length }, () => 0);

//   dp[0] = array[0];
//   dp[1] = Math.max(array[0], array[1]);

//   for (let i = 2; i < array.length; i += 1) {
//     dp[i] = Math.max(dp[i - 2] + array[i], dp[i - 1]);

//     maxSum = Math.max(maxSum, dp[i]);
//   }

//   return maxSum;
// }

// Solution2 : 공간복잡도 절약
function maxSubsetSumNoAdjacent(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];

  let second = array[0];
  let first = Math.max(array[0], array[1]);

  for (let i = 2; i < array.length; i += 1) {
    const cur = Math.max(first, second + array[i]);
    second = first;
    first = cur;
  }

  return first;
}

console.log(maxSubsetSumNoAdjacent(array));
