const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

function productSum(array, depth = 1) {
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    const cur = array[i];

    if (typeof cur === "number") {
      sum += cur;
    } else {
      sum += productSum(cur, depth + 1);
    }
  }

  return sum * depth;
}

console.log(productSum(array));
