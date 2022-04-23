// Container With Most Water

// 저장할 수 있는 물의 최대량 구하기

// Solution 1 : Two Pointer

const maxArea = (height) => {
  let start = 0;
  let end = height.length - 1;
  let maxWater = 0;

  while (start <= end) {
    const totalHeight = Math.min(height[start], height[end]);
    const totalWidth = end - start;

    maxWater = Math.max(maxWater, totalHeight * totalWidth);

    if (height[start] > height[end]) {
      end -= 1;
    } else {
      start += 1;
    }
  }

  return maxWater;
};

maxArea([1, 1]);
