// 반환되는 배열 answer은 각 인덱스의 값이 nums i를 제외한 모든 값들의 곱과 같다.

// 시간복잡도는 O(n)이 되어야 하며,  time and without using the division operation.

// 추가 조건 : O(1)의 공간 복잡도로 해결 (반환되는 배열은 추가 공간으로 계산하지 않음);

// Solution1 : 실패
// const productExceptSelf = (nums) => {
//   let totalProduct = 1;
//   let noZeroProduct = Number.MIN_SAFE_INTEGER;

//   const answer = [];

//   let hasZero = false;

//   for (let i = 0; i < nums.length; i += 1) {
//     if (nums[i] === 0) {
//       hasZero = true;
//       totalProduct *= nums[i];
//     } else {
//       totalProduct *= nums[i];
//       noZeroProduct =
//         noZeroProduct === Number.MIN_SAFE_INTEGER
//           ? nums[i]
//           : noZeroProduct * nums[i];
//     }
//   }

//   if (noZeroProduct === Number.MIN_SAFE_INTEGER)
//     return Array.from({ length: nums.length }, () => 0);

//   for (let j = 0; j < nums.length; j += 1) {
//     if (hasZero && nums[j] !== 0) answer[j] = 0;
//     else if (hasZero && nums[j] === 0) answer[j] = noZeroProduct;
//     else answer[j] = totalProduct / nums[j];
//   }

//   return answer;

// };

// Solution2

// const productExceptSelf = (nums) => {
//   const leftArr = [];
//   let leftMultiplication = 1;

//   for (let i = 0; i < nums.length; i += 1) {
//     leftArr[i] = leftMultiplication;
//     leftMultiplication *= nums[i];
//   }

//   const rightArr = [];
//   let rightMultiplication = 1;

//   for (let i = nums.length - 1; i >= 0; i -= 1) {
//     rightArr[i] = rightMultiplication;
//     rightMultiplication *= nums[i];
//     rightArr[i] *= leftArr[i];
//   }

//   return rightArr;
// };

// Solution3

const productExceptSelf = (nums) => {
  const result = [];
  let multiplication = 1;

  for (let i = 0; i < nums.length; i += 1) {
    result[i] = multiplication;
    multiplication *= nums[i];
  }

  multiplication = 1;

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    result[i] *= multiplication;
    multiplication *= nums[i];
  }

  return result;
};

productExceptSelf([1, 2, 3, 4]);
