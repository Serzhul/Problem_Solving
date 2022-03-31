function solution(maps) {
  let answer = 1;

  const n = maps.length;
  const m = maps[0].length;

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const visited = Array.from(maps);

  const queue = [];
  queue.push([0, 0]);
  visited[0][0] = 0;

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i += 1) {
      const [x, y] = queue.shift();

      for (let j = 0; j < 4; j += 1) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
          if (nx === n - 1 && ny === m - 1) return answer + 1;

          queue.push([nx, ny]);

          visited[nx][ny] = 0;
        }
      }
    }

    answer += 1;
  }

  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
