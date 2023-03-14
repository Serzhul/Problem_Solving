// 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 조합

const solution = (input) => {
  const [N, M] = input.toString().trim().split(" ").map(Number);
  const checked = Array(N).fill(false);

  let ans = "";

  const dfs = (start, permutation = []) => {
    if (permutation.length === M) {
      ans += `${permutation.join(" ")}\n`;
      return;
    }

    for (let i = start; i <= N; i += 1) {
      if (!checked[i]) {
        checked[i] = true;
        permutation.push(i);
        dfs(i + 1, permutation);
        permutation.pop();
        checked[i] = false;
      }
    }
  };

  dfs(1);

  console.log(ans);
};

solution(`3 1`);
