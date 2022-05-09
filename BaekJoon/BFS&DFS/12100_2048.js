const solution = (input) => {
  let [N, ...board] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, i) =>
      i === 0 ? Number(el) : el.split(" ").map((num) => Number(num))
    );

  function arraysEqual(a1, a2) {
    return JSON.stringify(a1) === JSON.stringify(a2);
  }

  const convert = (lst, N) => {
    let newLst = lst.filter((i) => i > 0);

    for (let i = 1; i < newLst.length; i += 1) {
      if (newLst[i - 1] === newLst[i]) {
        newLst[i - 1] *= 2;
        newLst[i] = 0;
      }
    }
    newLst = newLst.filter((i) => i > 0);

    return newLst.concat(Array(N - newLst.length).fill(0));
  };

  const rotate90 = (N, b) => {
    const newBoard = Array.from({ length: N }, () => Array(N));

    for (let i = 0; i < N; i += 1) {
      for (let j = 0; j < N; j += 1) {
        newBoard[j][N - i - 1] = b[i][j];
      }
    }

    return newBoard;
  };

  const dfs = (N, b, count) => {
    let ret = Math.max(...b.map((n) => Math.max(...n))); // 2차원 배열 순회하면서 최댓값 구하기

    if (count === 0) return ret;

    for (let i = 0; i < 4; i += 1) {
      const X = b.map((x) => convert(x, N)); // 같은 숫자면 합치고 빈 칸을 0으로 채우는 로직

      if (!arraysEqual(X, b)) {
        ret = Math.max(ret, dfs(N, X, count - 1));
      }

      b = rotate90(N, b);
    }

    return ret;
  };

  console.log(dfs(N, board, 5));
};

solution(`3
2 2 2
4 4 4
8 8 8`);
