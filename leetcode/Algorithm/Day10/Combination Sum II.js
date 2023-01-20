/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const candidates = [10, 1, 2, 7, 6, 1, 5];
const target = 8;

const combinationSum2 = (candidates, target) => {
  const res = [];

  candidates.sort((a, b) => a - b);

  const checked = Array.from({ length: candidates.length }, () => false);

  const getComb = (start, comb, sum) => {
    if (sum === target) {
      res.push([...comb]);
      return;
    }

    for (let i = start; i < candidates.length; i += 1) {
      if (sum <= target && !checked[i]) {
        if (candidates[i] === candidates[i - 1] && !checked[i - 1]) continue;
        sum += candidates[i];
        comb.push(candidates[i]);
        checked[i] = true;
        getComb(i, comb, sum);
        // if (sum + candidates[i] <= target) {
        //   getComb(i, comb, sum);
        // } else if (sum + candidates[i] > target) {
        //   getComb(i + 1, comb, sum);
        // }
        sum -= candidates[i];
        comb.pop();
        checked[i] = false;
      }
    }
  };

  getComb(0, [], 0);

  return res;
};

console.log(combinationSum2(candidates, target));
