const height = 4;
const maxSteps = 2;

function staircaseTraversal(height, maxSteps) {
  const memoized = Array.from({ length: height + 1 }, () => 0);

  memoized[0] = 1;
  memoized[1] = 1;

  for (let curHeight = 2; curHeight <= height; curHeight += 1) {
    let step = 1;
    while (step <= maxSteps && step <= curHeight) {
      memoized[curHeight] = memoized[curHeight] + memoized[curHeight - step];
      step += 1;
    }
  }

  return memoized[height];
}

console.log(staircaseTraversal(height, maxSteps));
