// const edges = [
//   [1, 2],
//   [0, 2],
//   [0, 1],
// ];

const edges = [[0]];

function twoColorable(edges) {
  const colors = edges.map((_) => null);
  colors[0] = true;
  const stack = [0];

  while (stack.length) {
    const node = stack.pop();
    for (let i = 0; i < edges[node].length; i += 1) {
      const connection = edges[node][i];
      if (colors[connection] === null) {
        colors[connection] = !colors[node];
        stack.push(connection);
      } else if (colors[connection] === colors[node]) {
        return false;
      }
    }
  }

  return true;
}

console.log(twoColorable(edges));
