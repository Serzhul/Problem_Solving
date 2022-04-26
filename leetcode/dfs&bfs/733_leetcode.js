// 반복해서 체크하진 않는 지 주의 => 체크 배열 만들어둘 것

// Solution 1

// const floodFill = (image, sr, sc, newColor) => {
//   const m = image.length;
//   const n = image[0].length;

//   const dx = [1, 0, -1, 0];
//   const dy = [0, 1, 0, -1];

//   const startColor = image[sr][sc];

//   const checked = Array.from({ length: image.length }, () =>
//     Array(image[0].length)
//   );

//   const searchNewDirections = (arr, low, col) => {
//     if (checked[low][col]) return;

//     checked[low][col] = true;

//     if (arr[low][col] === startColor) arr[low][col] = newColor;

//     for (let i = 0; i < 4; i += 1) {
//       const newLow = low + dx[i];
//       const newCol = col + dy[i];

//       if (newLow >= 0 && newLow < m && newCol >= 0 && newCol < n) {
//         if (arr[newLow][newCol] === startColor) {
//           arr[newLow][newCol] = newColor;
//           searchNewDirections(arr, newLow, newCol);
//         }
//       }
//     }
//   };

//   searchNewDirections(image, sr, sc);

//   return image;
// };

// Solution 2 Simpler

const floodFill = (image, sr, sc, newColor, firstColor = image[sr][sc]) => {
  if (
    sr < 0 ||
    sc < 0 ||
    sr >= image.length ||
    sr > image[sr].length ||
    image[sr][sc] !== firstColor ||
    image[sr][sc] === newColor
  )
    return image;

  image[sr][sc] = newColor;

  floodFill(image, sr + 1, sc, newColor, firstColor);
  floodFill(image, sr, sc + 1, newColor, firstColor);
  floodFill(image, sr - 1, sc, newColor, firstColor);
  floodFill(image, sr, sc - 1, newColor, firstColor);

  return image;
};

floodFill(
  [
    [0, 0, 0],
    [0, 1, 1],
  ],
  1,
  1,
  1
);
