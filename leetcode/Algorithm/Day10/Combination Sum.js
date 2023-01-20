/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const candidates = [2, 3, 6, 7];
const target = 7;

// const candidates = [2, 3, 5];
// const target = 8;

const combinationSum = (candidates, target) => {
  const res = [];

  //   const checked = Array.from({ length: candidates.length }, () => false);

  candidates.sort((a, b) => a - b);

  const getComb = (start, comb, sum) => {
    if (sum === target) {
      res.push([...comb]);
      return;
    }

    for (let i = start; i < candidates.length; i += 1) {
      if (sum <= target) {
        sum += candidates[i];
        comb.push(candidates[i]);
        if (sum + candidates[i] <= target) {
          getComb(i, comb, sum);
        } else if (sum + candidates[i] > target) {
          getComb(i + 1, comb, sum);
        }
        sum -= candidates[i];
        comb.pop();
      }
    }
  };

  getComb(0, [], 0);

  return res;
};

console.log(combinationSum(candidates, target));
