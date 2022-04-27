const rob = (nums) => {
  const dp = Array.from({ length: nums.length }, () => 0);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i += 1) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
};

rob([1, 2, 3, 1]);
