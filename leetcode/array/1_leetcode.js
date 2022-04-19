// solution1 : 시간 복잡도 O(n^2)

// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i += 1) {
//     const newTarget = target - nums[i];

//     for (let j = i + 1; j < nums.length; j += 1) {
//       if (nums[j] === newTarget) {
//         return [i, j];
//       }
//     }
//   }
// };

// solution2 : 시간 복잡도 O(n) Object 사용

// const twoSum = (nums, target) => {
//   const numMap = {};

//   for (let i = 0; i < nums.length; i += 1) {
//     const findNum = target - nums[i];

//     if (numMap[findNum] === undefined) {
//       numMap[nums[i]] = i;
//     } else {
//       return [numMap[findNum], i];
//     }
//   }

//   return [];
// };

// solution3 : 시간 복잡도 O(n) Map 사용
const twoSum = (nums, target) => {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const findNum = target - nums[i];

    if (!numMap.has(findNum)) {
      numMap.set(nums[i], i);
    } else {
      return [numMap.get(findNum), i];
    }
  }

  return [];
};

twoSum([2, 7, 11, 15], 9);
