/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */

// const firstList = [
//   [0, 2],
//   [5, 10],
//   [13, 23],
//   [24, 25],
// ];

// const secondList = [
//   [1, 5],
//   [8, 12],
//   [15, 24],
//   [25, 26],
// ];

// const firstList = [
//   [1, 3],
//   [5, 9],
// ];
// const secondList = [];

const firstList = [[14, 16]];
const secondList = [
  [7, 13],
  [16, 20],
];

const intervalIntersection = (firstList, secondList) => {
  let ai = 0;
  let bi = 0;

  const res = [];

  while (ai < firstList.length && bi < secondList.length) {
    const maxStart = Math.max(firstList[ai][0], secondList[bi][0]);
    const minEnd = Math.min(firstList[ai][1], secondList[bi][1]);

    if (maxStart <= minEnd) res.push([maxStart, minEnd]);

    if (firstList[ai][1] < secondList[bi][1]) ai += 1;
    else bi += 1;
  }

  return res;
};

console.log(intervalIntersection(firstList, secondList));
