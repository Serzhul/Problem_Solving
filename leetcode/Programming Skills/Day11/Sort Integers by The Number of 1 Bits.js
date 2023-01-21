/**
 * @param {number[]} arr
 * @return {number[]}
 */

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];

const sortByBits = (arr) => {
  const checkBit = (num) =>
    [...num.toString(2)].reduce((acc, cur) => {
      if (cur === "1") acc += 1;
      return acc;
    }, 0);

  arr.sort((a, b) => {
    if (checkBit(a) > checkBit(b)) return 1;
    else if (checkBit(a) < checkBit(b)) return -1;
    return a - b;
  });

  return arr;
};

console.log(sortByBits(arr));
