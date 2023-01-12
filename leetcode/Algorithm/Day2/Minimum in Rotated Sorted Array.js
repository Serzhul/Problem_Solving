// const nums = [3, 4, 5, 1, 2];

// const nums = [4, 5, 6, 7, 0, 1, 2];

// const nums = [11, 13, 15, 17];

const nums = [2, 3, 1];

// Solution 1

// const findMin = (nums) => {
//   if (nums.length === 1) return nums[0];
//   let left = 0;
//   let right = nums.length - 1;

//   let min = Number.MAX_SAFE_INTEGER;

//   while (left < right) {
//     const mid = Math.floor((left + right) / 2);

//     if (min > nums[mid]) {
//       min = Math.min(nums[mid], nums[left], nums[right]);
//     }

//     if (nums[left] > nums[right]) {
//       left += 1;
//     } else {
//       right -= 1;
//     }
//   }

//   return min;
// };

// Solution 2

const findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }

  return nums[left];
};

console.log(findMin(nums));
