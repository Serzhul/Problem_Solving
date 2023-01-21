/**
 * @param {number[]} nums
 * @return {boolean}
 */
const nums = [1, 2, 3, 1];

const containsDuplicate = (nums) => {
  const numMap = {};

  for (let i = 0; i < nums.length; i += 1) {
    if (numMap[nums[i]]) return true;
    numMap[nums[i]] = 1;
  }

  return false;
};
