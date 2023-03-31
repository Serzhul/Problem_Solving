const park = ["OSO", "OOO", "OXO", "OOO"];
const routes = ["E 2", "S 3", "W 1"];

function solution(park, routes) {
  const [r, c] = [park.length, park[0].length];
  const board = park.map((el) => el.split(""));
  const orders = routes.map((el) => el.split(" "));

  const start = [];

  for (let i = 0; i < park.length; i += 1) {
    for (let j = 0; j < park[i].length; j += 1) {
      if (park[i][j] === "S") {
        start[0] = i;
        start[1] = j;
      }
    }
  }

  const checkIsInbound = (row, col) => {
    if (row >= 0 && row < r && col >= 0 && col < c) return true;
    return false;
  };

  const checkIsBlocked = (row, col, direction, dist) => {
    if (direction === "E") {
      for (let i = col; i <= col + dist; i += 1) {
        if (board[row][i] === "X") return true;
      }
    }
    if (direction === "W") {
      for (let i = col; i >= col - dist; i -= 1) {
        if (board[row][i] === "X") return true;
      }
    }

    if (direction === "S") {
      for (let i = row; i <= row + dist; i += 1) {
        if (board[i][col] === "X") return true;
      }
    }

    if (direction === "N") {
      for (let i = row; i >= row - dist; i -= 1) {
        if (board[i][col] === "X") return true;
      }
    }
  };

  let [x, y] = start;

  for (let i = 0; i < orders.length; i += 1) {
    let [direction, dist] = orders[i];
    dist = Number(dist);

    if (direction === "N") {
      if (checkIsInbound(x - dist, y) && !checkIsBlocked(x, y, direction, dist))
        x -= dist;
    } else if (direction === "S") {
      if (checkIsInbound(x + dist, y) && !checkIsBlocked(x, y, direction, dist))
        x += dist;
    } else if (direction === "W") {
      if (checkIsInbound(x, y - dist) && !checkIsBlocked(x, y, direction, dist))
        y -= dist;
    } else if (direction === "E") {
      if (checkIsInbound(x, y + dist) && !checkIsBlocked(x, y, direction, dist))
        y += dist;
    }
  }

  return [x, y];
}

console.log(solution(park, routes));
