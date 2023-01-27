const array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

function spiralTraverse(array) {
  const res = [];

  let [left, right, top, bottom] = [
    0,
    array[0].length - 1,
    0,
    array.length - 1,
  ];

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i += 1) {
      res.push(array[top][i]);
    }

    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      res.push(array[i][right]);
    }

    right -= 1;

    if (top <= bottom) {
      for (let i = right; i >= left; i -= 1) {
        res.push(array[bottom][i]);
      }

      bottom -= 1;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i -= 1) {
        res.push(array[i][left]);
      }

      left += 1;
    }
  }

  return res;
}

console.log(spiralTraverse(array));
