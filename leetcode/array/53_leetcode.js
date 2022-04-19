// 연속하는 서브 배열의 가장 큰 합 구하기

// Follow up: 시간복잡도 O(n)으로 풀어보기 => 분할 정복으로 풀어보기;

// function maxSubArray(nums) {
//   if (nums.length === 1) return nums[0];

//   let sum = 0;

//   let answer = Number.MIN_SAFE_INTEGER;

//   for (let i = 0; i < nums.length; i += 1) {
//     if (nums[i] >= 0) {
//       sum += nums[i];
//     } else {
//       sum = nums[i];
//     }

//     answer = Math.max(answer, sum);
//   }

//   return answer;
// }

// solution2

function maxSubArray(nums) {
  let currentSum = -Infinity;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i += 1) {
    currentSum = Math.max(currentSum, 0);
    currentSum += nums[i];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

maxSubArray([1, 2, 3]);
