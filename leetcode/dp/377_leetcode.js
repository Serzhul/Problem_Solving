// nums 배열의 요소들을 사용해 target을 만들 수 있는 조합의 수 구하기

// Follow up: 만약 주어진 배열에 음수가 포함되어 있다면 어떻게 할 것인가?
// 어떤 제한 조건을 추가해야 하는지?

const combinationSum4 = (nums, target) => {
  const dp = Array.from({ length: target + 1 }, () => 0);

  dp[0] = 1;

  for (let i = 0; i <= target; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (nums[j] + i <= target) {
        dp[nums[j] + i] += dp[i];
      }
    }
  }

  return dp[target];
};

combinationSum4([1, 2, 3], 4);
