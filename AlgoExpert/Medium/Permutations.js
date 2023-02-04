const array = [1, 2, 3];

function getPermutations(array) {
  if (array.length === 0) return [];
  const res = [];
  const checked = Array.from({ length: array.length }, () => false);

  const dfs = (permutation = []) => {
    if (permutation.length === array.length) {
      res.push([...permutation]);
      return;
    }
    for (let i = 0; i < array.length; i += 1) {
      if (!checked[i]) {
        checked[i] = true;
        permutation.push(array[i]);
        dfs(permutation);
        checked[i] = false;
        permutation.pop();
      }
    }
  };

  dfs();

  return res;
}

console.log(getPermutations(array));
