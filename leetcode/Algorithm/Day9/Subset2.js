/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const nums = [1, 2, 2];

const subsetsWithDup = (nums) => {
  const res = [];

  nums.sort((a, b) => a - b);

  const dfs = (origin, start, subset = []) => {
    res.push([...subset]);

    for (let i = start; i < origin.length; i += 1) {
      if (i > start && origin[i - 1] === origin[i]) continue;

      subset.push(origin[i]);

      dfs(origin, i + 1, subset);

      subset.pop();
    }
  };

  dfs(nums, 0, []);

  return res;
};

subsetsWithDup(nums);
