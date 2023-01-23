/**
 * @param {number[]} nums
 * @return {boolean}
 */
const nums = [1, 3, 2, 4];

const isMonotonic = (nums) => {
  let dif = 0;
  let dRes = true;

  for (let i = 1; i < nums.length; i += 1) {
    dif = nums[i - 1] - nums[i];

    if (dif < 0) {
      dRes = false;
      break;
    }
  }
  let rRes = true;

  for (let i = nums.length - 1; i >= 1; i -= 1) {
    dif = nums[i] - nums[i - 1];

    if (dif < 0) {
      rRes = false;
      break;
    }
  }

  return dRes || rRes;
};

console.log(isMonotonic(nums));
