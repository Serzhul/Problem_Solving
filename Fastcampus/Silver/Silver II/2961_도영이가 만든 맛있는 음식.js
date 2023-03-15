const solution = (input) => {
  const [N, ...flavors] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  const used = Array.from({ length: N }, () => false);

  let minDiff = Infinity;

  const dfs = (start, permutations = []) => {
    if (permutations.length >= 1) {
      let sourFlavors = permutations[0][0];
      let bitterFlavors = permutations[0][1];

      for (let i = 1; i < permutations.length; i += 1) {
        sourFlavors *= permutations[i][0];
        bitterFlavors += permutations[i][1];
      }

      minDiff = Math.min(Math.abs(sourFlavors - bitterFlavors), minDiff);
    }

    for (let i = start; i < flavors.length; i += 1) {
      if (!used[i]) {
        used[i] = true;
        permutations.push(flavors[i]);
        dfs(i, permutations);
        permutations.pop();
        used[i] = false;
      }
    }
  };

  dfs(0);
  console.log(minDiff);
};

solution(`4
1 7
2 6
3 8
4 9`);
