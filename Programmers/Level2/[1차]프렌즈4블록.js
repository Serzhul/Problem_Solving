/* 4블록 지우기
1. 4블록 지우는 함수 
- 아래, 오른쪽, 대각선 아래 쪽을 검사해서 모두 같으면 블록 모두 삭제
- 단 한꺼번에 지우기 때문에 순회를 모두 끝내고 나서 한번에 지우는 식으로 해야함

2. 비어있는 칸 남은 블록으로 채우는 함수
- 1차로 블록을 지우고 나면 지울수 있는 남은 블록이 있는 경우 계속 반복
- 지울수 있는 블록이 없어질 때까지 반복

3. 지워지는 블록이 전부 몇개인지 반환
*/

const m = 4;
const n = 5;
const board = ["AAAAA", "AUUUA", "AUUAA", "AAAAA"];

function solution(m, n, board) {
  board = board.map((el) => el.split(""));

  let ans = 0;

  const dx = [1, 0, 1];
  const dy = [0, 1, 1];

  function canDelete(x, y, board) {
    let cnt = 0;
    const target = board[x][y];

    for (let i = 0; i < 3; i += 1) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < m && ny < n) {
        const cur = board[nx][ny];
        if (cur === target) cnt += 1;
      }
    }

    return cnt === 3;
  }

  function removeBlock(x, y) {
    let count = 0;
    if (board[x][y] !== "") count += 1;
    board[x][y] = "";
    for (let i = 0; i < 3; i += 1) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (board[nx][ny] !== "") count += 1;
      board[nx][ny] = "";
    }

    return count;
  }

  function roatate90(board) {
    let newBoard = Array.from({ length: n }, () =>
      Array.from({ length: m }, () => "")
    );

    for (let i = 0; i < m; i += 1) {
      for (let j = 0; j < n; j += 1) {
        newBoard[j][m - 1 - i] = board[i][j];
      }
    }

    newBoard = newBoard.map((el) => el.filter((char) => char !== ""));

    for (let i = 0; i < m; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (!newBoard[i][j]) {
          newBoard[i][j] = "";
        }
      }
    }

    const res = Array.from({ length: m }, () =>
      Array.from({ length: n }, () => "")
    );

    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < m; j += 1) {
        res[m - 1 - j][i] = newBoard[i][j];
      }
    }

    return res;
  }

  const candidates = [];

  while (true) {
    for (let i = 0; i < m; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (board[i][j] !== "" && canDelete(i, j, board)) {
          candidates.push([i, j]);
        }
      }
    }

    if (candidates.length === 0) break;

    while (candidates.length > 0) {
      const [row, col] = candidates.pop();
      ans += removeBlock(row, col);
    }

    board = roatate90(board);
  }

  return ans;
}

console.log(solution(m, n, board));
