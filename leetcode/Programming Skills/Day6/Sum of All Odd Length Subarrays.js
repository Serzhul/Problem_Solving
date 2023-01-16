/**
 * @param {number[]} arr
 * @return {number}
 */
const arr = [1, 4, 2, 5, 3];

const sumOddLengthSubarrays = (arr) => {
  if (!arr.length) return 0;
  let total = 0;

  const findSum = (first, last) => {
    let sum = 0;
    for (let i = first; i <= last; i += 1) sum += arr[i];
    return sum;
  };

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j + i < arr.length; j += 2) total += findSum(i, i + j);
  }
  return total;
};

console.log(sumOddLengthSubarrays(arr));
