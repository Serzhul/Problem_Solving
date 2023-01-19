/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const nums = [1, 2, 3];

const subsets = (nums) => {
  const res = [];

  const checked = Array.from({ length: nums.length }, () => false);

  const dfs = (origin, start, subset = []) => {
    res.push([...subset]);

    for (let i = start; i < origin.length; i += 1) {
      if (!checked[i]) {
        checked[i] = true;
        subset.push(origin[i]);
        dfs(origin, i, subset);
        subset.pop();
        checked[i] = false;
      }
    }
  };

  dfs(nums, 0, []);

  return res;
};

subsets(nums);
