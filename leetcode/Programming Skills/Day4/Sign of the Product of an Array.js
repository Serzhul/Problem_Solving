/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [-1, -2, -3, -4, 3, 2, 1];
const arraySign = (nums) => {
  let product = 1;

  for (let i = 0; i < nums.length; i += 1) {
    product *= nums[i];
  }

  console.log(product);

  if (product > 0) return 1;
  if (product < 0) return -1;
  return 0;
};

console.log(arraySign(nums));
