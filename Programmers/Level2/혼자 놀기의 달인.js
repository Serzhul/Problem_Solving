const cards = [8, 6, 3, 7, 2, 5, 1, 4];

function pickGroups(boxes, pickNum) {
  let count1 = 0;
  let maxCount2 = 0;
  let nextNum = pickNum - 1;

  while (pickNum >= 1 && boxes[nextNum] !== 0) {
    const temp = boxes[nextNum];
    boxes[nextNum] = 0;
    nextNum = temp - 1;
    count1 += 1;
  }

  for (let i = 0; i < boxes.length; i += 1) {
    let count2 = 0;
    if (boxes[i] === 0) continue;
    let nextNum2 = boxes[i] - 1;

    while (nextNum2 >= 1 && boxes[nextNum2] !== 0) {
      const temp = boxes[nextNum2];
      boxes[nextNum2] = 0;
      nextNum2 = temp - 1;
      count2 += 1;
    }

    maxCount2 = Math.max(maxCount2, count2);
  }

  return count1 * maxCount2;
}

function solution(cards) {
  let maxPoint = 0;

  for (let i = 0; i < cards.length; i += 1) {
    maxPoint = Math.max(maxPoint, pickGroups([...cards], cards[i]));
  }

  return maxPoint;
}

console.log(solution(cards));
