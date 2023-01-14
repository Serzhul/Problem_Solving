/**
 * @param {number[]} arr
 * @return {boolean}
 */

const arr = [1, 2, 4];
const canMakeArithmeticProgression = (arr) => {
  arr.sort((a, b) => a - b);
  let diff = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < arr.length; i += 1) {
    if (diff === Number.MAX_SAFE_INTEGER) {
      diff = Math.abs(arr[i - 1] - arr[i]);
    } else if (diff !== Math.abs(arr[i - 1] - arr[i])) return false;
  }

  return true;
};

console.log(canMakeArithmeticProgression(arr));
