const edges = [[1, 3], [2, 3, 4], [0], [], [2, 5], []];

function getHasCycle(nodeList, targetNode) {
  const queue = [targetNode];
  const visitedNodes = {};

  while (queue.length) {
    const curNode = queue.shift();

    // Cycle이 발생한 경우
    if (nodeList[curNode].includes(targetNode)) return true;

    visitedNodes[curNode] = true;

    nodeList[curNode].forEach((edge) => {
      if (!(edge in visitedNodes)) {
        queue.push(edge);
      }
    });
  }

  return false;
}

function cycleInGraph(edges) {
  for (let i = 0; i < edges.length; i += 1) {
    const hasCycle = getHasCycle(edges, i);
    if (hasCycle) return hasCycle;
  }
  return false;
}

console.log(cycleInGraph(edges));
