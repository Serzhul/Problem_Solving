const array = [7, 6, 4, -1, 1, 2];
const targetSum = 16;

function fourNumberSum(array, targetSum) {
  const ans = [];

  const visited = Array.from({ length: array.length }, () => false);

  const dfs = (depth, sum, start, comb = []) => {
    if (depth === 4) {
      if (sum === targetSum) {
        ans.push([...comb]);
      }
    }

    for (let i = start; i < array.length; i += 1) {
      if (!visited[i]) {
        visited[i] = true;
        comb.push(array[i]);
        dfs(depth + 1, sum + array[i], i, comb);
        comb.pop();
        visited[i] = false;
      }
    }
  };

  dfs(0, 0, 0);

  return ans;
}

console.log(fourNumberSum(array, targetSum));
