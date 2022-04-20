// 목표 시간 복잡도 O(log n)

// 배열은 오름차순이며, rotate 되어있다 (최소 1번 이상) 이때 최솟값을 찾아라

// Soltuion 1 : 최악의 경우 시간복잡도 O(n)

// const findMin = (nums) => {
//   const len = nums.length;

//   let prev = nums[0];

//   for (let i = 1; i < len; i += 1) {
//     if (nums[i] < prev) return nums[i];
//     prev = nums[i];
//   }

//   return prev;
// };

// Solution 2 : 시간 복잡도 O(log n) => Binary Search 사용

const findMin = (nums) => {
  let left = nums[0];
  let right = nums[nums.length - 1];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }

  return nums[left];
};

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
