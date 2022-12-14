// 진짜 친구
// 최단 거리가 2이하인 경우만 진짜 친구

// const V = 3;

// const input = ["FTT", "TFT", "TTF"];

const V = 5;

const input = ["FTFFF", "TFTFF", "FTFTF", "FFTFT", "FFFTF"];

const graph = Array.from({ length: V }, () =>
  Array.from({ length: V }, () => Infinity)
);

for (let i = 0; i < V; i += 1) {
  graph[i][i] = 0;
}

for (let i = 0; i < V; i += 1) {
  for (let j = 0; j < V; j += 1) {
    if (input[i][j] === "T") {
      graph[i][j] = 1;
      graph[j][i] = 1;
    }
  }
}

for (let k = 0; k < V; k += 1) {
  for (let x = 0; x < V; x += 1) {
    for (let y = 0; y < V; y += 1) {
      if (graph[x][y] > graph[x][k] + graph[k][y]) {
        graph[x][y] = graph[x][k] + graph[k][y];
      }
    }
  }
}

let ans = 0;

for (let i = 0; i < V; i += 1) {
  for (let j = 0; j < V; j += 1) {
    if (graph[i][j] <= 2) ans += graph[i][j];
  }
}
console.log(ans / 2);
