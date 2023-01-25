// const array = [3, 5, -4, 8, 11, 1, -1, 6];
// const targetSum = 10;

const array = [1, 2, 1];
const targetSum = 3;

// Solution 1 : O(nlogn)
// function twoNumberSum(array, targetSum) {
//   array.sort((a, b) => a - b);

//   const len = array.length;

//   let left = 0;
//   let right = len - 1;

//   while (left <= right) {
//     if (array[left] + array[right] === targetSum)
//       return [array[left], array[right]];

//     if (array[left] + array[right] > targetSum) right -= 1;
//     else left += 1;
//   }

//   return [];
// }

// Solutions : O(n)
function twoNumberSum(array, targetSum) {
  const nums = {};

  for (let i = 0; i < array.length; i += 1) {
    const num = array[i];
    const potentialMatch = targetSum - num;

    if (potentialMatch in nums) {
      return [potentialMatch, num];
    }
    nums[num] = true;
  }

  return [];
}

console.log(twoNumberSum(array, targetSum));
