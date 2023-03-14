const solution = (input) => {
  const [N, M] = input.toString().trim().split(" ").map(Number);

  let ans = "";

  const dfs = (start, permutation = []) => {
    if (permutation.length === M) {
      ans += `${permutation.join(" ")}\n`;
      return;
    }

    for (let i = start; i <= N; i += 1) {
      permutation.push(i);
      dfs(i, permutation);
      permutation.pop();
    }
  };

  dfs(1);

  console.log(ans);
};

solution(`3 3`);
