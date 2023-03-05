const dots = [
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
];

function solution(dots) {
  // 평행이 되는 조건 = 기울기가 같다.

  const xChange = (x1, x2) => Math.abs(x1 - x2);
  const yChange = (y1, y2) => Math.abs(y1 - y2);

  let slope1;
  let slope2;

  // 1) (0,1) (2,3)
  slope1 = yChange(dots[0][1], dots[1][1]) / xChange(dots[0][0], dots[1][0]);
  slope2 = yChange(dots[2][1], dots[3][1]) / xChange(dots[2][0], dots[3][0]);

  if (slope1 === slope2) return 1;

  // 2) (0,2) (1,3)
  slope1 = yChange(dots[0][1], dots[2][1]) / xChange(dots[0][0], dots[2][0]);
  slope2 = yChange(dots[1][1], dots[3][1]) / xChange(dots[1][0], dots[3][0]);

  if (slope1 === slope2) return 1;

  // 3) (0,3) (1,2)

  slope1 = yChange(dots[0][1], dots[3][1]) / xChange(dots[0][0], dots[3][0]);
  slope2 = yChange(dots[2][1], dots[1][1]) / xChange(dots[2][0], dots[1][0]);

  if (slope1 === slope2) return 1;

  return 0;
}

console.log(solution(dots));
