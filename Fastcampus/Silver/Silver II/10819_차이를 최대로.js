const solution = (input) => {
  const [N, nums] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  const visited = Array.from({ length: N }, () => false);

  const getSum = (arr) => {
    let sum = 0;

    for (let j = 0; j < N - 1; j += 1) {
      sum += Math.abs(arr[j] - arr[j + 1]);
    }

    return sum;
  };

  let max = 0;

  const dfs = (selected) => {
    if (selected.length === N) {
      const sum = getSum(selected);
      max = Math.max(sum, max);
      return;
    }

    for (let i = 0; i < N; i += 1) {
      if (!visited[i]) {
        visited[i] = true;
        selected.push(nums[i]);
        dfs(selected);
        selected.pop();
        visited[i] = false;
      }
    }
  };

  dfs([]);

  console.log(max);
};

solution(`6
20 1 15 8 4 10`);
