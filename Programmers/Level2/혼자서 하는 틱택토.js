const board = ["OOX", "XXO", "OXO"];

const checkIsWin = (set) => {
  if (set.has("00") && set.has("11") && set.has("22")) return true;
  if (set.has("02") && set.has("11") && set.has("20")) return true;
  if (set.has("00") && set.has("10") && set.has("20")) return true;
  if (set.has("01") && set.has("11") && set.has("21")) return true;
  if (set.has("02") && set.has("12") && set.has("22")) return true;
  if (set.has("10") && set.has("11") && set.has("12")) return true;
  if (set.has("20") && set.has("21") && set.has("22")) return true;
  if (set.has("00") && set.has("01") && set.has("02")) return true;

  return false;
};

function solution(board) {
  const newBoard = board.map((row) => row.split(""));
  const oCor = new Set();
  const xCor = new Set();

  for (let i = 0; i < newBoard.length; i += 1) {
    for (let j = 0; j < newBoard[i].length; j += 1) {
      if (newBoard[i][j] === "O") oCor.add(`${i}${j}`);
      else if (newBoard[i][j] === "X") xCor.add(`${i}${j}`);
    }
  }

  if (xCor.size > oCor.size) return 0;
  if (oCor.size > xCor.size + 1) return 0;

  if (oCor.size >= 3 && checkIsWin(oCor) && oCor.size <= xCor.size) return 0;
  if (xCor.size >= 3 && checkIsWin(xCor) && oCor.size > xCor.size) return 0;

  return 1;
}

console.log(solution(board));
