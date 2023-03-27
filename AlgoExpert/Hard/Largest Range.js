const array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];

function largestRange(array) {
  const numMap = {};

  for (let i = 0; i < array.length; i += 1) {
    numMap[array[i]] = 1;
  }

  let maxCount = 0;
  let ans = [];

  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    let cur = array[i];
    let start = 0;
    let end = 0;

    while (numMap[cur - 1]) {
      cur -= 1;
      count += 1;
    }

    start = cur;

    cur = array[i];

    while (numMap[cur + 1]) {
      cur += 1;
      count += 1;
    }

    end = cur;

    if (maxCount <= count) {
      ans = [start, end];
      maxCount = count;
    }
  }

  return ans;
}

console.log(largestRange(array));
