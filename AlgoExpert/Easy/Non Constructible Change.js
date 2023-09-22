const coins = [5, 7, 1, 1, 2, 3, 22];

// function nonConstructibleChange(coins) {
//   coins.sort((a, b) => a - b);

//   let change = 0;

//   for (let i = 0; i < coins.length; i += 1) {
//     if (change + 1 < coins[i]) return change + 1;
//     change += coins[i];
//   }

//   return change + 1;
// }

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);

  let change = 0;

  for (let i = 0; i < coins.length; i += 1) {
    if (change + 1 < coins[i]) return change + 1;
    change += coins[i];
  }

  return change + 1;
}

console.log(nonConstructibleChange(coins));
