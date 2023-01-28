// const intervals = [
//   [1, 2],
//   [3, 5],
//   [4, 7],
//   [6, 8],
//   [9, 10],
// ];

const array = [
  [1, 22],
  [-20, 30],
];

function mergeOverlappingIntervals(array) {
  const intervals = [];

  array.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < array.length; i += 1) {
    let mergeCount = 0;
    let [curStart, curEnd] = array[i];

    for (let j = i + 1; j < array.length; j += 1) {
      const [nextStart, nextEnd] = array[j];

      console.log(curStart, curEnd, nextStart, nextEnd);

      if (curEnd >= nextStart) {
        curEnd = Math.max(curEnd, nextEnd);
        mergeCount += 1;
      } else break;
    }
    intervals.push([curStart, curEnd]);
    i += mergeCount;
  }

  return intervals;
}

console.log(mergeOverlappingIntervals(array));
