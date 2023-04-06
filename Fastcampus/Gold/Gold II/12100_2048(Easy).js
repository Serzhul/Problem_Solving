/*
# 출력 : 최대 5번 이동시켜서 얻을 수 있는 가장 큰 블록

# 체크 조건
# N * N
# 1 <= N <= 20
# 0은 빈칸

# 4방향 중복 순열 => 4 ** 5 => 1024가지 경우
    # 백트래킹

# 1. 왼쪽 방향으로의 블록 이동 & 병합
    # (board, N) => None

# 2. 방향 전환 (회전)
    # (board, direction) => board
    # 왼쪽 방향으로 이동 => 회전안함 (0)
    # 오른쪽 방향으로 이동 => 좌우 반전 (1)
    # 위쪽 방향으로 이동 => 반시계 90도 (2)
    # 아래쪽 방향으로 이동 => 시계 90도 (3)
    # 연산 후 되돌리기 (0, X, 1-1, 2-3, 3-2)

# 3. 가장 큰 블록 값 갱신
*/

const solution = (input) => {
  const [[N], ...board] = input
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  let max = 0;

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
    let ret = Math.max(...b.map((n) => Math.max(...n)));

    if (count === 0) return ret;

    for (let i = 0; i < 4; i += 1) {
      const X = b.map((x) => convert(x, N));

      //   console.log(X, b);

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
