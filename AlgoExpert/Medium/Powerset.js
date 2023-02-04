const array = [1, 2, 3];

function powerset(array) {
  const res = [];

  const checked = Array.from({ length: array.length }, () => false);

  const dfs = (start, sets = []) => {
    if (sets.length > array.length) return;
    res.push([...sets]);

    for (let i = start; i < array.length; i += 1) {
      if (!checked[i]) {
        checked[i] = true;
        sets.push(array[i]);
        dfs(i, sets);
        checked[i] = false;
        sets.pop();
      }
    }
  };

  dfs(0);

  return res;
}

console.log(powerset(array));
