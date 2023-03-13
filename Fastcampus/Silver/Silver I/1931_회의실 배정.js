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
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let lastMeeting = meetings[0];
  let ans = 1;

  for (let i = 1; i < meetings.length; i += 1) {
    const meeting = meetings[i];

    if (lastMeeting[1] <= meeting[0]) {
      lastMeeting = meeting;
      ans += 1;
    }
  }

  console.log(ans);
};

solution(`11
1 4
0 1
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`);
