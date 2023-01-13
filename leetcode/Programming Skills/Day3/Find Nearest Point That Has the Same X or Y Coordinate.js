/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */

const x = 3;
const y = 4;
const points = [
  [1, 2],
  [3, 1],
  [2, 4],
  [2, 3],
  [4, 4],
];

const calManhattan = (dis1, dis2) =>
  Math.abs(dis1[0] - dis2[0]) + Math.abs(dis1[1] - dis2[1]);

const nearestValidPoint = (x, y, points) => {
  let min = Number.MAX_SAFE_INTEGER;
  let minIdx = points.length;

  for (let i = 0; i < points.length; i += 1) {
    const [pointX, pointY] = points[i];

    if (pointX === x || pointY === y) {
      const dist = calManhattan([x, y], points[i]);

      if (min >= dist) {
        if (min !== dist) minIdx = i;
        min = dist;
      }
    }
  }

  if (minIdx === points.length) return -1;

  return minIdx;
};

console.log(nearestValidPoint(x, y, points));
