const board = [
  ["t", "h", "i", "s", "i", "s", "a"],
  ["s", "i", "m", "p", "l", "e", "x"],
  ["b", "x", "x", "x", "x", "e", "b"],
  ["x", "o", "g", "g", "l", "x", "o"],
  ["x", "x", "x", "D", "T", "r", "a"],
  ["R", "E", "P", "E", "A", "d", "x"],
  ["x", "x", "x", "x", "x", "x", "x"],
  ["N", "O", "T", "R", "E", "-", "P"],
  ["x", "x", "D", "E", "T", "A", "E"],
];

const words = [
  "this",
  "is",
  "not",
  "a",
  "simple",
  "boggle",
  "board",
  "test",
  "REPEATED",
  "NOTRE-PEATED",
];

function boggleBoard(board, words) {
  const result = new Set();
  const map = {};

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    const letter = word[0];
    if (map[letter] === undefined) {
      map[letter] = [];
      map[letter].push(word);
    }
  }

  function findWord(x, y, matrix, word, idx) {
    if (
      x < 0 ||
      y < 0 ||
      x >= matrix.length ||
      y >= matrix[0].length ||
      matrix[x][y] !== word[idx]
    )
      return false;

    if (idx === word.length - 1) return true;

    const temp = matrix[x][y];
    matrix[x][y] = "*";

    const wordFound =
      findWord(x + 1, y, matrix, word, idx + 1) ||
      findWord(x - 1, y, matrix, word, idx + 1) ||
      findWord(x, y + 1, matrix, word, idx + 1) ||
      findWord(x, y - 1, matrix, word, idx + 1) ||
      findWord(x + 1, y + 1, matrix, word, idx + 1) ||
      findWord(x - 1, y - 1, matrix, word, idx + 1) ||
      findWord(x + 1, y - 1, matrix, word, idx + 1) ||
      findWord(x - 1, y + 1, matrix, word, idx + 1);

    matrix[x][y] = temp;

    return wordFound;
  }

  for (let j = 0; j < board.length; j += 1) {
    for (let k = 0; k < board[j].length; k += 1) {
      const letter = board[j][k];

      if (map[letter] !== undefined) {
        map[letter].forEach((word) => {
          if (!result.has(word) && findWord(j, k, board, word, 0)) {
            result.add(word);
          }
        });
      }
    }
  }

  return Array.from(result);
}

console.log(boggleBoard(board, words));
