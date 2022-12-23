/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [2, 1];

const findPeakElement = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left < right) {
    mid = Math.floor((right + left) / 2);
    if (nums[mid] > nums[mid + 1]) right = mid;
    else left = mid + 1;
  }
  return left;
};

console.log(findPeakElement(nums));
