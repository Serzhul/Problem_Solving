/**
 * @param {number[]} height
 * @return {number}
 */

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// const height = [1, 1];

const maxArea = (height) => {
  let start = 0;
  let end = height.length - 1;
  let ans = 0;

  while (start < end) {
    // console.log(height[start], height[end]);
    ans = Math.max(ans, Math.min(height[start], height[end]) * (end - start));
    height[start] <= height[end] ? (start += 1) : (end -= 1);
  }

  return ans;
};

console.log(maxArea(height));
