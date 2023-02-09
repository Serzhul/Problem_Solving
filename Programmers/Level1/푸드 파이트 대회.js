const food = [1, 3];

function solution(food) {
  let left = 0;
  let right = food.reduce((acc, cur) => acc + cur, 0);

  let leftPlayer = "";
  let rightPlayer = "";
  let foodNum = 1;

  while (foodNum < food.length && left < right) {
    const perFood = Math.floor(food[foodNum] / 2);

    for (let i = 1; i <= perFood; i += 1) {
      leftPlayer += foodNum;
      rightPlayer = foodNum + rightPlayer;
    }

    left += perFood;
    right -= perFood;
    foodNum += 1;
  }

  return `${leftPlayer}0${rightPlayer}`;
}

console.log(solution(food));
