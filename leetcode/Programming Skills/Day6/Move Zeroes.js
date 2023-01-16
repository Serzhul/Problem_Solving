/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nums = [0, 1, 0, 3, 12];

const moveZeroes = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (count >= nums.length) break;
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i -= 1;
    }
    count += 1;
  }
};

moveZeroes(nums);
