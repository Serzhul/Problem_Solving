const nums = [-1, 2, 3, 4, -5, -3, 1, 2];

function zeroSumSubarray(nums) {
  const sums = new Set([0]);

  let currentSum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    currentSum += nums[i];
    if (sums.has(currentSum)) return true;
    sums.add(currentSum);
  }
  return false;
}

console.log(zeroSumSubarray(nums));
