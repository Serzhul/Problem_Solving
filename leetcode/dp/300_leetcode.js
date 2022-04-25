// Longest Increasing Subsequence 구하기
// Follow up: 시간 복잡도 O(n log (n))을 떠올릴 수 있는가?

const lengthOfLIS = (nums) => {
  const bsPos = (dp, target, high) => {
    let low = 0;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (target === dp[mid]) return mid;
      if (target < dp[mid]) high = mid - 1;
      else low = mid + 1;
    }

    return low;
  };

  const dp = Array(nums.length + 1).fill(Number.MAX_SAFE_INTEGER);

  for (let i = 0; i < nums.length; i += 1) {
    const pos = bsPos(dp, nums[i], i);

    dp[pos] = nums[i];
  }

  for (let j = dp.length - 1; j >= 0; j -= 1) {
    if (dp[j] !== Number.MAX_SAFE_INTEGER) return j + 1;
  }

  return 0;
};

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
