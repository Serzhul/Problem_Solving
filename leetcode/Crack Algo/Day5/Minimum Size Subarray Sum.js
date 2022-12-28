/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// const target = 7;
// const nums = [2, 3, 1, 2, 4, 3];

// const target = 4;
// const nums = [1, 4, 4];

const target = 11;
const nums = [1, 2, 3, 4, 5];

const minSubArrayLen = (target, nums) => {
  let left = 0;
  let right = 0;
  let sum = 0;
  let result = 0;

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= target) {
      const len = right - left + 1;
      if (result === 0 || len < result) result = len;
      sum -= nums[left];
      left += 1;
    }
    right += 1;
  }
  return result;
};

console.log(minSubArrayLen(target, nums));
