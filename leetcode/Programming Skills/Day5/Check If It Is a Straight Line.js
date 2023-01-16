/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

// const coordinates = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 5],
//   [5, 6],
//   [6, 7],
// ];

// const coordinates = [
//   [1, 1],
//   [2, 2],
//   [3, 4],
//   [4, 5],
//   [5, 6],
//   [7, 7],
// ];

const coordinates = [
  [1, 1],
  [2, 2],
  [2, 0],
];

const checkStraightLine = (coordinates) => {
  const dx = coordinates[1][0] - coordinates[0][0];
  const dy = coordinates[1][1] - coordinates[0][1];
  const ds =
    coordinates[0][0] * coordinates[1][1] -
    coordinates[1][0] * coordinates[0][1];

  for (let i = 2; i < coordinates.length; i += 1) {
    if (coordinates[i][0] * dy - coordinates[i][1] * dx !== ds) return false;
  }
  return true;
};

console.log(checkStraightLine(coordinates));
