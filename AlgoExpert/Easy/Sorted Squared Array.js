const array = [1, 2, 3, 5, 6, 8, 9];

function sortedSquaredArray(array) {
  return array.map((el) => el ** 2).sort((a, b) => a - b);
}
