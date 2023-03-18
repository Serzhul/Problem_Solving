const solution = (input) => {
  const [n, m, ...friends] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx <= 1) return Number(el);
      return el.split(" ").map(Number);
    });

  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n + 1 }, () => 0);

  friends.forEach((friend) => {
    const [from, to] = friend;

    graph[from].push(to);
    graph[to].push(from);
  });

  const queue = [];

  queue.push(1);

  visited[1] = 0;

  while (queue.length) {
    const cur = queue.shift();

    for (let i = 0; i < graph[cur].length; i += 1) {
      const nextFriend = graph[cur][i];

      if (!visited[nextFriend]) {
        visited[nextFriend] += visited[cur] + 1;
        queue.push(nextFriend);
      }
    }
  }

  let ans = 0;

  for (let i = 2; i <= n; i += 1) {
    if (visited[i] >= 1 && visited[i] <= 2) ans += 1;
  }

  console.log(ans);
};

solution(`6
5
2 3
3 4
4 5
5 6
2 5`);
