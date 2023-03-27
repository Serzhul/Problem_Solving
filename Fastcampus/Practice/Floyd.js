for (let k = 1; k <= n; k += 1) {
  for (let a = 1; a <= n; a += 1) {
    for (let b = 1; b <= n; b += 1) {
      if (a !== b) {
        const cost = graph[a][k] + graph[k][b];
        graph[a][b] = Math.min(graph[a][b], cost);
      }
    }
  }
}
