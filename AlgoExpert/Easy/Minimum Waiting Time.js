const queries = [3, 2, 1, 2, 6];

function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);

  let total = 0;
  let lastSum = 0;

  for (let i = 0; i < queries.length - 1; i += 1) {
    if (i === 0) lastSum = queries[i];
    else lastSum += queries[i];
    total += lastSum;
  }

  return total;
}

console.log(minimumWaitingTime(queries));
