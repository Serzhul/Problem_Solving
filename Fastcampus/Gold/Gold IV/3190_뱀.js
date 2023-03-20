const solution = (input) => {
  const data = input.toString().trim().split("\n");

  const N = Number(data[0]);
  const K = Number(data[1]);

  const graph = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => 0)
  );

  for (let i = 2; i < 2 + K; i += 1) {
    const [x, y] = data[i].split(" ").map(Number);
    graph[x][y] = 1;
  }

  const L = Number(data[2 + K]);

  const info = [];

  for (let i = K + 3; i < K + L + 3; i += 1) {
    const [time, direction] = data[i].split(" ");
    info.push([Number(time), direction]);
  }

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  function turn(direction, c) {
    if (c === "L") {
      direction -= 1;
      if (direction === -1) direction = 3;
    } else direction = (direction + 1) % 4;
    return direction;
  }

  graph[1][1] = 2;

  let direction = 0;
  let time = 0;
  let index = 0;
  let [x, y] = [1, 1];

  const queue = [];
  queue.push([x, y]);

  while (true) {
    const nx = x + dx[direction];
    const ny = y + dy[direction];

    if (nx >= 1 && nx <= N && ny >= 1 && ny <= N && graph[nx][ny] !== 2) {
      if (graph[nx][ny] === 0) {
        graph[nx][ny] = 2;
        queue.push([nx, ny]);
        const [px, py] = queue.shift();
        graph[px][py] = 0;
      }
      if (graph[nx][ny] === 1) {
        graph[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    } else {
      time += 1;
      break;
    }

    [x, y] = [nx, ny];
    time += 1;

    if (index < L && time === info[index][0]) {
      direction = turn(direction, info[index][1]);
      index += 1;
    }
  }

  console.log(time);
};

solution(`10
5
1 5
1 3
1 2
1 6
1 7
4
8 D
10 D
11 D
13 L`);
