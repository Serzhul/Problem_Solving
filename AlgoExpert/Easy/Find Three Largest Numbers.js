const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

function findThreeLargestNumbers(array) {
  let first = Number.MIN_SAFE_INTEGER;
  let second = Number.MIN_SAFE_INTEGER;
  let third = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < array.length; i += 1) {
    const cur = array[i];

    if (first <= cur) {
      third = second;
      second = first;
      first = cur;
    } else if (second <= cur) {
      third = second;
      second = cur;
    } else if (third <= cur) third = cur;
  }

  return [third, second, first];
}

console.log(findThreeLargestNumbers(array));
