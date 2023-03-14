const solution = (input) => {
  const [N, M] = input.toString().trim().split(" ").map(Number);
  const checked = Array(N).fill(false);

  let ans = "";

  const dfs = (permutation = []) => {
    if (permutation.length === M) {
      ans += `${permutation.join(" ")}\n`;
      return;
    }

    for (let i = 1; i <= N; i += 1) {
      if (!checked[i]) {
        checked[i] = true;
        permutation.push(i);
        dfs(permutation);
        permutation.pop();
        checked[i] = false;
      }
    }
  };

  dfs();

  console.log(ans);
};

solution(`3 1`);
