const solution = (input) => {
  const [N, M] = input.toString().trim().split(" ").map(Number);

  let ans = "";

  const dfs = (permutation = []) => {
    if (permutation.length === M) {
      ans += `${permutation.join(" ")}\n`;
      return;
    }

    for (let i = 1; i <= N; i += 1) {
      permutation.push(i);
      dfs(permutation);
      permutation.pop();
    }
  };

  dfs();

  console.log(ans);
};

solution(`3 3`);
