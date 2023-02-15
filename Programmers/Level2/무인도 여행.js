const maps = ["X591X", "X1X5X", "X231X", "1XXX1"];

function solution(maps) {
  const newMap = maps.map((string) => string.split(""));
  const [row, col] = [newMap.length, newMap[0].length];

  function countFood(r, c) {
    let foods = 0;
    if (r < 0 || c < 0 || r >= row || c >= col || newMap[r][c] === "X")
      return foods;

    foods += Number(newMap[r][c]);
    newMap[r][c] = "X";

    foods += countFood(r + 1, c);
    foods += countFood(r, c + 1);
    foods += countFood(r - 1, c);
    foods += countFood(r, c - 1);

    return foods;
  }

  const answer = [];

  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      if (newMap[i][j] !== "X") {
        answer.push(countFood(i, j));
      }
    }
  }

  if (answer.length === 0) return [-1];

  answer.sort((a, b) => a - b);
  return answer;
}

console.log(solution(maps));
