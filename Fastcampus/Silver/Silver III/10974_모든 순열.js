const solution = (input) => {
  const [N] = input.toString().trim().split(" ").map(Number);
  const checked = Array(N).fill(false);

  let ans = "";

  const dfs = (start, permutation = []) => {
    if (permutation.length === N) {
      ans += `${permutation.join(" ")}\n`;
      return;
    }

    for (let i = 1; i <= N; i += 1) {
      if (!checked[i]) {
        checked[i] = true;
        permutation.push(i);
        dfs(start, permutation);
        checked[i] = false;
        permutation.pop();
      }
    }
  };

  dfs();

  console.log(ans);
};

solution(`3`);
