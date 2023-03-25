const solution = (input) => {
  const data = input.toString().trim().split("\n");

  const n = Number(data[0]);
  const arr = []; // 마을 정보
  for (let i = 1; i <= n; i += 1) {
    arr.push(data[i].split(""));
  }
  const height = []; // 고도 정보

  for (let i = n + 1; i <= n + n; i += 1) {
    height.push(data[i].split(" ").map(Number));
  }

  let visited = [];
  let cnt = 0;

  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  function dfs(x, y) {
    visited[x][y] = true; // 방문 처리
    if (arr[x][y] === "K") cnt += 1; // 집(K)인 경우 카운트
    for (let i = 0; i < 8; i += 1) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 전체 그리드를 벗어나지 않는 범위이면서 방문하지 않은 노드인 경우
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && !visited[nx][ny]) {
        const target = height[nx][ny]; // 새로운 고도

        // 새로운 고도가 범위에 포함되는 경우
        // uniqueHeight는 모든 고도값들 중에서 unique한 값들만 정렬하여 담는다. (Set을 이용)
        // 이를 이용해 target이 uniqueHeight 범위에 속하는지 아닌지 알 수 있다.
        if (target >= uniqueHeight[left] && target <= uniqueHeight[right]) {
          dfs(nx, ny);
        }
      }
    }
  }

  let uniqueHeight = new Set();
  let target = 0;
  let result = 1e9;

  let startX = 0;
  let startY = 0;

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      uniqueHeight.add(height[i][j]);
      if (arr[i][j] === "P") {
        startX = i;
        startY = j;
      }
      if (arr[i][j] === "K") target += 1;
    }
  }

  uniqueHeight = [...uniqueHeight];
  uniqueHeight.sort((a, b) => a - b);

  // 전체 탐색 범위
  let left = 0; // 가장 낮은 고도
  let right = 0; // 우체국을 포함하는 고도
  let middle = 0;

  // left => middle까지 right => 마지막 원소까지 이동
  for (let i = 0; i < uniqueHeight.length; i += 1) {
    if (uniqueHeight[i] === height[startX][startY]) {
      right = i;
      middle = i;
      break;
    }
  }

  while (true) {
    while (true) {
      visited = [];
      for (let i = 0; i < n; i += 1) visited.push(new Array(n).fill(false));
      cnt = 0;
      dfs(startX, startY);
      if (right < uniqueHeight.length - 1 && cnt < target) right += 1;
      else break;
    }
    if (cnt === target) {
      result = Math.min(result, uniqueHeight[right] - uniqueHeight[left]);
    }
    left += 1;

    if (left > middle || right >= uniqueHeight.length) break;
  }

  console.log(result);
};

solution(`3
K.P
...
K.K
3 3 4
9 5 9
8 3 7`);
