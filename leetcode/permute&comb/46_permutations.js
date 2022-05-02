const permute = (nums) => {
  const answer = [];

  const len = nums.length;

  const checked = Array.from({ length: len }, () => false);

  const dfs = (idx, arr) => {
    if (idx === len) {
      answer.push([...arr]);
      return;
    }

    for (let i = 0; i < nums.length; i += 1) {
      if (!checked[i]) {
        checked[i] = true;

        arr.push(nums[i]);
        dfs(idx + 1, arr);
        arr.pop();

        checked[i] = false;
      }
    }
  };

  dfs(0, []);

  return answer;
};

permute([1, 2, 3]);
