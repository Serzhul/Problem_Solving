const maxProduct = (nums) => {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    const curMax = Math.max(prevMax * nums[i], nums[i], prevMin * nums[i]);
    const curMin = Math.min(prevMax * nums[i], nums[i], prevMin * nums[i]);

    prevMax = curMax;
    prevMin = curMin;

    result = Math.max(curMax, result);
  }

  return result;
};

console.log(maxProduct([2, 3, -2, 4]));
