// const solution = (input) => {
//   const [N, ...meetings] = input
//     .toString()
//     .trim()
//     .split("\n")
//     .map((el, idx) => {
//       if (idx === 0) return Number(el);
//       return el.split(" ").map(Number);
//     });

//   meetings.sort((a, b) => {
//     if (a[1] === b[1]) return a[0] - b[0];
//     return a[1] - b[1];
//   });

//   let lastMeeting = meetings[0];
//   let ans = 1;

//   for (let i = 1; i < meetings.length; i += 1) {
//     const meeting = meetings[i];

//     if (lastMeeting[1] <= meeting[0]) {
//       lastMeeting = meeting;
//       ans += 1;
//     }
//   }

//   console.log(ans);
// };

// 복습

const solution = (input) => {
  const [N, ...meetings] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  meetings.sort((a, b) => {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;

    return a[0] - b[0];
  });

  const arr = [];

  arr.push(meetings[0]);

  let count = 1;

  for (let i = 1; i < meetings.length; i += 1) {
    const [x, y] = meetings[i];
    const [a, b] = arr.at(-1);

    if (x >= b) {
      arr.push([x, y]);
      count += 1;
    }
  }

  console.log(count);
};

solution(`11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`);
