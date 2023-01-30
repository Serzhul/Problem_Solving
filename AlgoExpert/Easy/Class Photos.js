const redShirtHeights = [5, 8, 1, 3, 4];
const blueShirtHeights = [6, 9, 2, 4, 5];

function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  const len = redShirtHeights.length;

  let redIsFront = true;
  let blueIsFront = true;

  for (let i = 0; i < len; i += 1) {
    if (redShirtHeights[i] > blueShirtHeights[i]) {
      redIsFront = false;
      break;
    }
  }

  for (let i = 0; i < len; i += 1) {
    if (redShirtHeights[i] < blueShirtHeights[i]) {
      blueIsFront = false;
      break;
    }
  }

  return redIsFront || blueIsFront;
}

console.log(classPhotos(redShirtHeights, blueShirtHeights));
