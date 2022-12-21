/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// const nums = [5, 7, 7, 8, 8, 10];
// const target = 8;

// const nums = [5, 7, 7, 8, 8, 10];
// const target = 6;

const nums = [1, 1, 2];
const target = 1;

// 오름차순 정수 배열이 주어졌을때, target 값의 시작점과 끝의 위치를 찾아라

const searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  const res = [];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      let start = mid;
      let end = mid;

      for (let i = mid - 1; nums[i] >= target; i -= 1) {
        start = i;
      }

      for (let i = mid; nums[i] <= target; i += 1) {
        end = i;
      }

      res[0] = start;
      res[1] = end;

      return res;
    }

    if (nums[mid] < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return [-1, -1];
};

console.log(searchRange(nums, target));
