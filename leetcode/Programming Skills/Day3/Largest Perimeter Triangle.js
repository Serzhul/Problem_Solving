/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [1, 2, 1, 10];

// const largestPerimeter = (nums) => {
//   nums.sort((a, b) => a - b);

//   let res = 0;

//   const len = nums.length;

//   for (let i = 0; i < len; i += 1) {
//     let low = i + 1;
//     let high = len - 1;

//     while (low < high) {
//       const sum = nums[i] + nums[low] + nums[high];
//       if (nums[i] + nums[low] > nums[high]) {
//         if (res < sum) res = sum;
//         low += 1;
//         high -= 1;
//       } else {
//         high -= 1;
//       }
//     }
//   }

//   return res;
// };

// Solution2

const largestPerimeter = (nums) => {
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2])
      return nums[i] + nums[i + 1] + nums[i + 2];
  }
  return 0;
};

console.log(largestPerimeter(nums));
