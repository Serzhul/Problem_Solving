/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const nums = [-1, 0, 1, 2, -1, -4];
// const nums = [0, 1, 1];
// const nums = [0, 0, 0];

// Triplet 조건
// 1. 3개의 원소의 값이 다 달라야함
// 2. 3개 원소의 합이 0이어야 함

const threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    let low = i + 1;
    let high = nums.length - 1;
    let sum = 0;

    while (low < high) {
      sum = nums[i] + nums[low] + nums[high];

      if (sum === 0) {
        result.push([nums[i], nums[low], nums[high]]);

        // 중복 제거용 코드
        while (nums[low + 1] === nums[low]) low += 1;
        while (nums[high - 1] === nums[high]) high -= 1;
        low += 1;
        high -= 1;
      } else if (sum < 0) low += 1;
      else high -= 1;
    }
    while (nums[i + 1] === nums[i]) i += 1;
  }

  return result;
};

threeSum(nums);
