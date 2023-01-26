const array = [12, 3, 1, 2, -6, 5, -8, 6];
const targetSum = 0;

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);

  const res = [];

  for (let i = 0; i < array.length; i += 1) {
    const cur = array[i];
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const target = targetSum - cur;
      const sum = array[left] + array[right];

      if (sum === target) {
        res.push([cur, array[left], array[right]]);
      }

      if (sum < target) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  return res;
}

console.log(threeNumberSum(array, targetSum));
