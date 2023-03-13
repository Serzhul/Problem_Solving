const solution = (input) => {
  const [T, ...testCases] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el;
    });

  let ans = "";

  const totalCases = [];

  for (let i = 0; i < testCases.length; i += 1) {
    const memberNum = Number(testCases[i]);
    const members = [];

    for (let j = 1; j <= memberNum; j += 1) {
      members.push(testCases[i + j].split(" ").map(Number));
    }

    members.sort((a, b) => a[0] - b[0]);

    totalCases.push(members);
    i += memberNum;
  }

  for (let i = 0; i < totalCases.length; i += 1) {
    let count = 1;
    let [paper, interview] = totalCases[i][0];
    for (let j = 1; j < totalCases[i].length; j += 1) {
      const [comparePaper, compareInterview] = totalCases[i][j];
      if (compareInterview < interview) {
        count += 1;
        interview = compareInterview;
      }
    }

    ans += `${count}\n`;
  }

  console.log(ans);
};

solution(`2
5
3 2
1 4
4 1
2 3
5 5
7
3 6
7 3
4 2
1 4
5 7
2 5
6 1`);
