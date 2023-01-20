/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const nums = [3, 3, 0, 3];

const permuteUnique = (nums) => {
  const len = nums.length;
  const res = [];

  const checked = Array.from({ length: len }, () => false);

  nums.sort((a, b) => a - b);

  const permute = (start, permutation) => {
    if (permutation.length === len) {
      res.push([...permutation]);
      return;
    }

    for (let i = start; i < len; i += 1) {
      if (i > 0 && nums[i - 1] === nums[i] && !checked[i - 1]) continue;
      if (!checked[i]) {
        checked[i] = true;
        permutation.push(nums[i]);
        permute(start, permutation);
        permutation.pop();
        checked[i] = false;
      }
    }
  };

  for (let i = 0; i < nums.length; i += 1) {
    permute(i, []);
  }

  return res;
};

console.log(permuteUnique(nums));
