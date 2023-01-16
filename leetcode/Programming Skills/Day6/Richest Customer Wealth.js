/**
 * @param {number[][]} accounts
 * @return {number}
 */
const accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

const maximumWealth = (accounts) => {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < accounts.length; i += 1) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j += 1) {
      sum += accounts[i][j];
    }
    if (max < sum) max = sum;
  }

  return max;
};

console.log(maximumWealth(accounts));
