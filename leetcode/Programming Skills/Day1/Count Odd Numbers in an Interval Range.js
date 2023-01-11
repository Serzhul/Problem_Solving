/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

const low = 3;
const high = 7;

const countOdds = (low, high) => {
  const c = Math.round((high - low) / 2);

  return low % 2 === 1 && high % 2 === 1 ? c + 1 : c;
};

console.log(countOdds(low, high));
