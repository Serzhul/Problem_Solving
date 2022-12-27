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
  let minLen = Number.MAX_SAFE_INTEGER;

  for (let left = 0; left < nums.length; left += 1) {
    let sumOfSubarray = 0;
    let right = left;

    while (sumOfSubarray < target) {
      if (nums[right] >= target) {
        minLen = 1;
        break;
      }
      sumOfSubarray += nums[right];
      right += 1;
    }

    if (sumOfSubarray < target && minLen === Number.MAX_SAFE_INTEGER) return 0;

    minLen = Math.min(minLen, right - left + 1);
  }

  return minLen;
};

console.log(minSubArrayLen(target, nums));
