/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// const nums = [10, 5, 2, 6];
// const k = 100;

// const nums = [1, 2, 3];
// const k = 0;

const nums = [1, 1, 1, 1, 1];
const k = 1000000;

const numSubarrayProductLessThanK = (nums, k) => {
  let left = 0;
  let right = 0;

  let count = 0;
  let product = 1;

  while (left < nums.length) {
    if (product * nums[right] < k) {
      product *= nums[right];
      count += 1;
      right += 1;
    } else {
      left += 1;
      right = left;
      product = 1;
    }
  }

  return count;
};

numSubarrayProductLessThanK(nums, k);
