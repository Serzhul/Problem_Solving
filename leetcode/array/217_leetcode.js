// 2번 이상 반복되는 요소가 있는지 논리값 반환

// Solution : Map을 통해 값을 기록 후 2개 이상 될 경우 값을 반환
const containsDuplicate = (nums) => {
  const numMap = {};

  for (let i = 0; i < nums.length; i += 1) {
    if (numMap[nums[i]] >= 2) return true;
    numMap[nums[i]] = numMap[nums[i]] || 1 + 1;
  }

  return false;
};

containsDuplicate([1, 2, 3, 1]);
