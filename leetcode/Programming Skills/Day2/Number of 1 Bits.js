/**
 * @param {number} n - a positive integer
 * @return {number}
 */

const n = 00000000000000000000000000001011;

const hammingWeight = (n) => {
  let count = 0;

  [...n.toString(2)].forEach((val) => {
    if (val === "1") count += 1;
  });

  return count;
};

console.log(hammingWeight(n));
