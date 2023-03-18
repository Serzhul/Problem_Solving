class Queue {
  constructor() {
    this.items = {};
    this.headIdx = 0;
    this.tailIdx = 0;
  }

  enqueue(data) {
    this.items[this.tailIdx] = data;
    this.tailIdx += 1;
  }

  dequeue() {
    const data = this.items[this.headIdx];
    delete this.items[this.headIdx];
    this.headIdx += 1;
    return data;
  }

  peek() {
    return this.items[this.headIdx];
  }

  getSize() {
    return this.tailIdx - this.headIdx;
  }
}

const solution = (input) => {
  const [[N, M, K, X], ...cities] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  const graph = Array.from({ length: N + 1 }, () => []);

  const distance = Array.from({ length: N + 1 }, () => -1);

  cities.forEach((city) => {
    const [from, to] = city;
    graph[from].push(to);
  });

  distance[X] = 0;

  const queue = new Queue();

  queue.enqueue(X);

  while (queue.getSize() !== 0) {
    const city = queue.dequeue();

    for (let i = 0; i < graph[city].length; i += 1) {
      const nextCity = graph[city][i];
      if (distance[nextCity] === -1) {
        distance[nextCity] = distance[city] + 1;
        queue.enqueue(nextCity);
      }
    }
  }

  let ans = "";

  distance.forEach((minDist, idx) => {
    if (minDist === K) ans += `${idx}\n`;
  });

  if (ans === "") console.log(-1);
  else console.log(ans);
};

solution(`4 4 1 1
1 2
1 3
2 3
2 4`);
