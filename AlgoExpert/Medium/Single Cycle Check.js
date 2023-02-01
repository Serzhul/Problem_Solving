// const array = [2, 3, 1, -4, -4, 2];

const array = [1, 1, 1, 1, 2];

function getNextIdx(idx, array) {
  const jump = array[idx];
  const nextIdx = (idx + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}

function hasSingleCycle(array) {
  let numElementsVisited = 0;
  let curIdx = 0;

  while (numElementsVisited < array.length) {
    if (numElementsVisited > 0 && curIdx === 0) return false;
    numElementsVisited += 1;

    curIdx = getNextIdx(curIdx, array);
  }

  return curIdx === 0;
}

console.log(hasSingleCycle(array));
