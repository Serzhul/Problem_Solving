const solution = (input) => {
  let [[N, M, K], ...board] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map((num) => Number(num)));

  const arr = board.slice(0, N);
  const rotateArr = board.slice(N, N + K);

  const dx = [1, 0, -1, 0];

  const dy = [0, -1, 0, 1];

  let answer = Number.MAX_SAFE_INTEGER;

  const convert = (arr, qry) => {
    let [r, c, s] = qry;

    r -= 1;
    c -= 1;

    const newArr = JSON.parse(JSON.stringify(arr));

    for (let i = 1; i < s + 1; i += 1) {
      let rr = r - i;
      let cc = c + i;

      for (let w = 0; w < 4; w += 1) {
        for (let d = 0; d < i * 2; d += 1) {
          const rrr = rr + dx[w];
          const ccc = cc + dy[w];

          newArr[rrr][ccc] = arr[rr][cc];

          [rr, cc] = [rrr, ccc];
        }
      }
    }
    return newArr;
  };

  const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

  const getColMin = (arr) => {
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < N; i += 1) {
      let count = 0;

      for (let j = 0; j < M; j += 1) {
        count += arr[i][j];
      }

      if (min > count) {
        min = count;
      }
    }

    return min;
  };

  const dfs = (arr, qry) => {
    if (sum(qry) === K) {
      answer = Math.min(answer, getColMin(arr));
      return;
    }

    for (let i = 0; i < K; i += 1) {
      if (qry[i]) continue;
      const newArr = convert(arr, rotateArr[i]);
      qry[i] = 1;
      dfs(newArr, qry);
      qry[i] = 0;
    }
  };

  dfs(arr, Array(K).fill(0));
  console.log(answer);
};

solution(`5 6 2
1 2 3 2 5 6
3 8 7 2 1 3
8 2 3 1 4 5
3 4 5 1 1 1
9 3 2 1 4 3
3 4 2
4 2 1`);
