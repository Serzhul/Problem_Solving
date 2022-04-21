// 오름차순 정수 배열이 있을 때, 각 요소를 제곱한 후 제곱한 갑들로 오름차순 된 형태로 반환하기

// Solution1 : 빌트인 고차함수 메서드 사용

// const sortedSquares = (nums) =>
//   nums.map((num) => num ** 2).sort((a, b) => a - b);

// Solution2 : 투 포인터
const sortedSquares = (nums) => {
  const result = [];

  let left = 0;
  let right = nums.length - 1;

  for (let i = right; i >= 0; i -= 1) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      result[i] = nums[right] ** 2;
      right -= 1;
    } else {
      result[i] = nums[left] ** 2;
      left += 1;
    }
  }
  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
